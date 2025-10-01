import GrandChild from "./GrandChild";

const Child = ({ user }) => {
  return (
    <div className="p-4 bg-gray-50 border rounded-lg mb-4">
      <h2 className="text-lg font-medium text-green-600">Child Component</h2>
      {/* Passing user to GrandChild */}
      <GrandChild user={user} />
    </div>
  );
};

export default Child;
