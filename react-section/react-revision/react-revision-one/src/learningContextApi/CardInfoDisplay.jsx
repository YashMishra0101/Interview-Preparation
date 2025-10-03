import { useActionState } from "react";
import { useCardContext } from "./context/cart/CardContext";
import toast from "react-hot-toast";

const CardInfoDisplay = () => {
  const { cardInfo, setCardInfo } = useCardContext();

  // Convert image file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const formSubmitHandler = async (_prevState, formData) => {
    const pImage = formData.get("productImage");
    const pName = formData.get("productName");
    const pPrice = formData.get("productPrice");

    if (!pImage || pName.trim() === "" || pPrice.trim() === "") {
      toast.error("All fields are required!");
      return;
    }

    try {
      // Convert image file to base64
      const imageBase64 = await convertToBase64(pImage);

      setCardInfo((prev) => [...prev, { imageURL: imageBase64, pName, pPrice }]);
      toast.success(`${pName} added successfully!`);
    } catch (error) {
      toast.error("Failed to process image!");
    }
  };

  const [formState, formAction, isPending] = useActionState(
    formSubmitHandler,
    null
  );

  const removeProduct = (removeIndex) => {
    const removed = cardInfo[removeIndex].pName;
    const updatedData = cardInfo.filter((_, Itemindex) => Itemindex !== removeIndex);
    setCardInfo(updatedData);
    toast.success(`${removed} removed`);
  };

  const total = cardInfo.reduce((sum, item) => sum + Number(item.pPrice), 0);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Context API Card Manager (with Base64 Image)
      </h1>

      <form action={formAction} className="space-y-4 mb-8">
        <div className="flex flex-col">
          <label htmlFor="productImage" className="mb-1 font-semibold">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="productImage"
            name="productImage"
            disabled={isPending}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="productName" className="mb-1 font-semibold">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            disabled={isPending}
            required
            className="border p-2 rounded"
            placeholder="Please add product name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="productPrice" className="mb-1 font-semibold">
            Add Price
          </label>
          <input
            min="0"
            type="number"
            id="productPrice"
            name="productPrice"
            disabled={isPending}
            required
            className="border p-2 rounded"
            placeholder="Please enter product price"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-green-600 transition"
        >
          Add Product
        </button>
      </form>

      <div className="space-y-4">
        {cardInfo.map((data, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white rounded shadow relative"
          >
            <img
              src={data.imageURL}
              alt="not found"
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <p className="font-semibold">Name: {data.pName}</p>
              <p className="text-gray-600">Price: ₹{data.pPrice}</p>
            </div>
            <div>
              <button
                className="w-[8rem] bg-red-500 text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-red-600 transition absolute right-4 bottom-8"
                onClick={() => removeProduct(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="text-xl font-bold text-right">
          Total Product Price: ₹{total}
        </div>
      </div>
    </div>
  );
};

export default CardInfoDisplay;
