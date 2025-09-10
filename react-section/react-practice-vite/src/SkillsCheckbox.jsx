import { useState } from "react";

const SkillsCheckbox = () => {
  const [isSelected, setSelected] = useState([]);

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...isSelected, value]);
    } else {
      setSelected(
        isSelected.filter((skill) => {
          return skill !== value;
        })
      );
    }
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col text-center bg-green-500 py-6 mt-8">
        <div>
          <div className="font-bold text-2xl mb-2 text-white"> Please Select Your Skills</div>
          <label htmlFor="Javascript">
            <input
              type="checkbox"
              id="Javascript"
              onChange={handleCheckBox}
              value="Javascript"
              checked={isSelected.includes("Javascript")}
            />
            Javascript
          </label>
        </div>
        <div>
          <label htmlFor="React">
            <input
              type="checkbox"
              id="React"
              onChange={handleCheckBox}
              value="React"
              checked={isSelected.includes("React")}
            />
            React
          </label>
        </div>
        <div>
          <label htmlFor="Typescript">
            <input
              type="checkbox"
              id="Typescript"
              onChange={handleCheckBox}
              value="Typescript"
              checked={isSelected.includes("Typescript")}
            />
            Typescript
          </label>
        </div>
        <div>
          <label htmlFor="Node">
            <input
              type="checkbox"
              id="Node"
              onChange={handleCheckBox}
              value="Node"
              checked={isSelected.includes("Node")}
            />
            Node
          </label>
        </div>
        <div>
          <label htmlFor="Express">
            <input
              type="checkbox"
              id="Express"
              onChange={handleCheckBox}
              value="Express"
              checked={isSelected.includes("Express")}
            />
            Express
          </label>
          <p className="border-2 p-2 rounded-2xl mt-2 text-white font-semibold">
            Selected Skills=
            {isSelected.length > 0 ? isSelected.join(",") : " None"}
          </p>
          <button
            onClick={() => setSelected("")}
            className="border-2 w-52 border-white text-white font-semibold hover:text-lg p-2 rounded-2xl cursor-pointer mt-4"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default SkillsCheckbox;
