import GreatGrandChild from "./GreatGrandChild";

const GrandChild = ({ user }) => {
  return (
    <div className="p-4 bg-white border rounded-lg mb-4">
      <h2 className="text-lg font-medium text-blue-600">GrandChild Component</h2>
      {/* Passing user to GreatGrandChild */}
      <GreatGrandChild user={user} />
    </div>
  );
};

export default GrandChild;
