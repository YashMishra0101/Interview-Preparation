import { useState } from "react";
import toast from "react-hot-toast";

const InputFieldData = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const inputFieldHandler = () => {
    if (inputData.trim() === "") {
      toast.error("Input field is empty");
      return;
    } else {
      setData((data) => [...data, inputData]);
      setInputData("");
    }
  };
  const removeHandler = (removeIndex) => {
    const removed = data[removeIndex];

    const updatedData = data.filter((_, index) => {
      return index !== removeIndex;
    });
    toast.success(`${removed} removed`);
    setData(updatedData);
  };
  const totalUser = data.length;
  const lastUser = data[data.length - 1];
  const uniqueUser = new Set(data).size;
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-green-200">
      <h1 className="text-2xl font-bold text-blue-600 mb-4"> Derived State </h1>
      <div className="text-lg font-semibold text-blue-600">
        <p>Total user : {totalUser}</p>
        <p>Last user: {data.length !== 0 ? lastUser : "Not Present"}</p>
        <p>Total unique user : {uniqueUser}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="Enter anything you want"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          required
          className="border-2 border-blue-500 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          onClick={inputFieldHandler}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition cursor-pointer"
        >
          Add
        </button>
      </div>

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
