import { useState } from "react";

// FormData automatically collects ALL form data from inputs that have a name attribute inside the form.
const React19Form = () => {
  const formSubmitHandler = (formData) => {
    const dname = formData.get("developerName");
    const demail = formData.get("developerEmail");
    const drole = formData.get("developerRole");
    console.log(dname);
    console.log(demail);
    console.log(drole);
    if(dname.length===0 || demail.length === 0 || drole.length ===0){
       
        
    }
  };
  return (
    <>
      <div className="flex justify-center flex-col items-center bg-blue-500 mt-7 py-6">
        <h2 className="text-white mb-3 font-bold ml-3 text-2xl">
          React 19 Form Handling
        </h2>

        <form className="text-white" action={formSubmitHandler}>
          <div>
            <label htmlFor="developerName">Name:</label>
            <input
              type="text"
              name="developerName"
              id="developerName"
              required //HTML5 feature
              className="border-2 border-white outline-0"
            />
          </div>
          <div>
            <label htmlFor="developerEmail">Email:</label>
            <input
              type="email"
              name="developerEmail"
              id="developerEmail"
              required
              className="border-2 border-white outline-0 mt-2"
            />
          </div>
          <div>
            <label htmlFor="developerRole">Role:</label>
            <input
              type="text"
              name="developerRole"
              id="developerRole"
              required 
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

export default React19Form;
