import Child from "./Child";

const Parent = ({ user }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4">
      <h2 className="text-xl font-semibold text-purple-600">Parent Component</h2>
      {/* Passing user to Child */}
      <Child user={user} />
    </div>
  );
};

export default Parent;
