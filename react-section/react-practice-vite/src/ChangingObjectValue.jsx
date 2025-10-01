import { useState } from "react";
import toast from "react-hot-toast";
const ChangingObjectValue = () => {
  const [data, setData] = useState("name");
  const [inputData, setInputData] = useState("");
  const [intialdata, setIntialData] = useState({
    name: "Yash",
    role: "Full Stack Web Developer",
    location: {
      country: "India",
      state: "Maharashtra",
    },
  });
  const changeDeveloprInfo = () => {
    let updatedInfo = inputData.trim();
    if (updatedInfo === "") {
      toast.error("Input field is empty");
      return;
    }
    if (data === "name" || data === "role") {
      setIntialData((prev) => ({ ...prev, [data]: updatedInfo }));
    }
    if (data === "country" || data === "state") {
      setIntialData((prev) => ({
        ...prev,
        location: { ...prev.location, [data]: updatedInfo },
      }));
    }
    setInputData("");
    toast.success("Info updated successfully");
  };
  return (
    <>
      <div className=" mx-auto p-4 border rounded-2xl bg-gray-50 shadow-md mt-12 w-[30rem]">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
         Changing Object Values
        </h2>

        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {intialdata.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Role:</span> {intialdata.role}
        </p>

        <ul className="list-none pl-3 mt-2 text-gray-700">
          <li className="font-semibold">Location</li>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Country: {intialdata.location.country}</li>
            <li>State: {intialdata.location.state}</li>
          </ul>
        </ul>
        <div className="flex justify-center items-center mb-3 mt-6 ">
          <input
            type="text"
            placeholder="Enter"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="border-gray-700 w-[15rem] border-2 outline-0"
          />
          <select
            className="border-2 border-gray-700 ml-2 outline-0"
            defaultValue="name"
            onChange={(e) => setData(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="role">Role</option>
            <option value="country">Country</option>
            <option value="state">State</option>
          </select>
          <button
            className="border-2 border-gray-700 ml-3 p-0.5 cursor-pointer "
            onClick={changeDeveloprInfo}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangingObjectValue;
