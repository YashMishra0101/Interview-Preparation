import { useState } from "react";

const ReactForm = () => {
  const [formData, setFormData] = useState({
    dname: "",
    demail: "",
    drole: "",
  });

  const inputFieldHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submited Successfully");
    setFormData({
      dname: "",
      demail: "",
      drole: "",
    });
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center bg-green-500 mt-7 py-6">
        <h2 className="text-white mb-3 font-bold ml-3 text-2xl">
          React 18 Form Handling
        </h2>
        <form className="text-white" onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="developerName">Name:</label>
            <input
              type="text"
              name="dname"
              id="developerName"
              value={formData.dname}
              onChange={inputFieldHandler}
              className="border-2 border-white outline-0"
            />
          </div>
          <div>
            <label htmlFor="developerEmail">Email:</label>
            <input
              type="email"
              name="demail"
              id="developerEmail"
              value={formData.demail}
              onChange={inputFieldHandler}
              className="border-2 border-white outline-0 mt-2"
            />
          </div>
          <div>
            <label htmlFor="developerRole">Role:</label>
            <input
              type="text"
              name="drole"
              id="developerRole"
              value={formData.drole}
              onChange={inputFieldHandler}
              className="border-2 border-white outline-0 mt-2"
            />
          </div>
          <button
            type="submit"
            className="border-2 w-52 border-white text-white font-semibold hover:text-lg p-2 rounded-2xl cursor-pointer mt-3 ml-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReactForm;
