import { useState } from "react";

const SkillsCheckbox = () => {
  const [skills, setSkills] = useState([]);
  const checkBoxHandler = (e) => {
    const { checked, value } = e.target;
    console.log(value, checked);
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(
        skills.filter((skill) => {
          return skill !== value;
        })
      );
    }
  };
  const clearData = () => {
    setSkills([]);
  };
  return (
    <>
      <div className="pb-6 w-screen bg-blue-500 flex justify-center items-center flex-col gap-2 ">
        <h2 className="font-bold text-blue-200 mb-6 text-2xl mt-4">
          Handling Check box
        </h2>

        <h2 className="text-2xl font-bold text-center mb-5 text-white">
          Select Your Skills
        </h2>
        <div>
          <input
            type="checkbox"
            id="Javascript"
            value="Javascript"
            onChange={checkBoxHandler}
            checked={skills.includes("Javascript")}
          />
          <label htmlFor="Javascript">Javascript</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="React"
            value="React"
            onChange={checkBoxHandler}
            checked={skills.includes("React")}
          />
          <label htmlFor="React">React</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Typescript"
            value="Typescript"
            onChange={checkBoxHandler}
            checked={skills.includes("Typescript")}
          />
          <label htmlFor="Typescript">Typescript</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Node"
            value="Node"
            onChange={checkBoxHandler}
            checked={skills.includes("Node")}
          />
          <label htmlFor="Node">Node</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Express"
            value="Express"
            onChange={checkBoxHandler}
            checked={skills.includes("Express")}
          />
          <label htmlFor="Express">Expres</label>
        </div>
        <p className="text-2xl font-bold text-center mb-5 mt-7 text-white">
          Selected Skills:
          {skills.length === 0 ? "Not Selected" : skills.join(",")}
        </p>
        <button
          onClick={clearData}
          className="border-2 w-52 border-white text-white font-semibold hover:text-lg p-2 rounded-2xl cursor-pointer "
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default SkillsCheckbox;
