import { useState } from "react";

const RadioSelect = () => {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const handelRole = (e) => {
    setRole(e.target.value);
  };
  const handelLocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col py-6 mt-8">
        <div className="border-2 border-red-600">
          <h2 className="text-2xl font-bold text-center mb-2 mt-3 text-red-600 w-80">
            Select Your Role
          </h2>
          <div className="text-center text-red-600">
            <div>
              <input
                type="radio"
                name="role"
                id="frontend"
                onChange={handelRole}
                value="Frontend Developer"
              />
              <label htmlFor="frontend">Frontend Developer</label>
            </div>
            <div>
              <input
                type="radio"
                name="role"
                id="backend"
                onChange={handelRole}
                value="Backend Developer"
              />
              <label htmlFor="backend">Backend Developer</label>
            </div>
            <div>
              <input
                type="radio"
                name="role"
                id="fullstack"
                onChange={handelRole}
                value="Fullstack Developer"
              />
              <label htmlFor="fullstac">Fullstack Developer</label>
            </div>
            <p className="font-bold text-center mt-2 text-red-600">
              Role Selected: {role === "" ? "Not selected" : role + "🧑‍💻"}
            </p>
          </div>
          <hr className="w-80 border-t-2 border-red-400 my-4" />
          <div className="text-2xl font-bold text-center mb-2 mt-3 text-red-600 w-80">
            <div>Select Your Location</div>
            <select
              className="text-lg flex items-end ml-5 border-2 outline-none my-3"
              value={location}
              onChange={handelLocation}
            >
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="England">England</option>
            </select>
          </div>
          <p className="font-bold text-center mb-2 mt-2 text-red-600">
            Location Selected: {location === "" ? "Not selected" : location}
          </p>
        </div>
      </div>
    </>
  );
};

export default RadioSelect;
