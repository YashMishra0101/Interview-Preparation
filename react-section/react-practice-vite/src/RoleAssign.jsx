import { useState } from "react";
const RoleAssign = () => {
  const [score, setScore] = useState("");
  const [role, setRole] = useState("Waithing for score...");
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedScore = score.trim();
    if (trimmedScore === "") {
      setRole("Input field is empty");
      return;
    }

    const numScore = Number(trimmedScore);
    if (isNaN(numScore)) {
      setRole("Please enter a valid number");
      return;
    }
    if (numScore < 0 || numScore > 100) {
      setRole("Score must be between 0 and 100");
      return;
    }
    if (numScore < 50) {
      setRole("Sorry, your Score doesn't meet our criteria");
    } else if (numScore < 60) {
      setRole("You are selected for re-examination");
    } else if (numScore < 70) {
      setRole(
        "You are seleted for 6 month internship, then eligible for the full-time job"
      );
    } else if (numScore < 80) {
      setRole(
        "You are selered for 3 month internship, then for the full-time job"
      );
    } else if (numScore < 90) {
      setRole(
        "You are selered for 1 month internship, then for the full-time job"
      );
    } else if (numScore >= 90) {
      setRole("You are selected for full-time job");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col py-6 mt-8">
                <h2 className="font-bold text-green-600 mb-6 text-2xl">Handling Multiple Option</h2>

        <h1 className="text-2xl font-bold text-center mb-5  text-green-600">
          Job Eligibility Checker
        </h1>
        <span className="role border-2 border-green-500 p-2 bg-green-300 rounded-sm w-[25rem] min-h-10 text-center mb-5 ">
          {role}
        </span>
        <form onSubmit={handleSubmit} className=" flex flex-col">
          <input
            type="number"
            placeholder="Enter your score (Score must be between 0 and 100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            min="0"
            max="100"
            className="w-[25rem] border-2 h-10 border-green-500 rounded-sm mb-5 text-center bg-green-100 outline-none"
          />
          <button
            type="submit"
            className="border-2 border-green-500 p-2 bg-green-300 rounded-full cursor-pointer"
          >
            Submit Your Score
          </button>
        </form>
      </div>
    </>
  );
};

export default RoleAssign;
