import React from "react";

const AddInfo = () => {
  return (
    <>
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" placeholder="Please add the name" />
          </div>
          <div>
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              id="country"
              placeholder="Please add the country"
            />
          </div>
          <div>
            <label htmlFor="experience">Experience: </label>
            <input
              type="text"
              id="experience"
              placeholder="Please add the experience"
            />
          </div>
          <div>
            <label htmlFor="currentposition">Current Position: </label>
            <input
              type="text"
              id="currentposition"
              placeholder="Please add the Current Position"
            />
          </div>
          <div>
            <label htmlFor="salary">Salary: </label>
            <input
              type="text"
              id="salary"
              placeholder="Please add the Salary"
            />
          </div>
          <div>
            <label htmlFor="previouscompany">Previous Company: </label>
            <input
              type="text"
              id="previouscompany"
              placeholder="Please add the Previous Company"
            />
          </div>
          <div>
            <label htmlFor="skills">Skills : </label>
            <input
              type="text"
              id="skills"
              placeholder="Please add the Skills"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddInfo;
