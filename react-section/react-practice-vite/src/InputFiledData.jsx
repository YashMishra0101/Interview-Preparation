import { useState, useActionState, useEffect } from "react";

const InputFieldData = () => {
  // Note: I know this is not the perfect way to do it, but I am just practicing React concepts, so i can keep this for learning purposes.
  const [data, setData] = useState([]);

  const inputHandler = (_, formData) => {
    let inputV = formData.get("inputValue");
    setData((prev) => [...prev, inputV]);
  };

  const removeHandler = (removeIndex) => {
    setData((prev) => prev.filter((_, index) => index !== removeIndex));
  };

  // Using useActionState for form action handling
  const [formState, formAction, isPending] = useActionState(inputHandler, data);

  useEffect(() => {
    console.log("Current Data:", data);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-300">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        React Practice Notes
      </h1>

      <form action={formAction} className="flex flex-col items-center gap-2">
        <input
          type="text"
          name="inputValue"
          placeholder="Enter anything you want"
          required
          className="border-2 border-blue-500 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition cursor-pointer"
        >
          Add
        </button>
      </form>

      <div className="mt-6 w-full max-w-md">
        {data.map((info, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-2 border-blue-300 rounded px-3 py-2 mb-2 bg-white shadow-sm"
          >
            <span className="text-blue-600 font-medium">
              {index + 1}. {info}
            </span>
            <button
              onClick={() => removeHandler(index)}
              className="text-red-600 font-semibold border border-red-400 px-2 py-1 rounded hover:bg-red-500 hover:text-white transition cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputFieldData;
