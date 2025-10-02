import Parent from "./Parent";

const PropDrillingExample = () => {
  const user = {
    name: "Yash Mishra",
    role: "Fullstack Developer",
    location: "India",
  };

  return (
    <div className="p-6 bg-yellow-200 mt-14">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Prop Drilling Example
      </h1>
      {/* Pass user data to Parent */}
      <Parent user={user} />
    </div>
  );
};

export default PropDrillingExample;
