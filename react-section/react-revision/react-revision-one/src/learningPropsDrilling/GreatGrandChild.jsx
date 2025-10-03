const GreatGrandChild = ({ user }) => {
  return (
    <div className="p-4 bg-gray-200 border rounded-lg">
      <h2 className="text-lg font-medium text-red-600">GreatGrandChild Component</h2>
      <p className="mt-2 text-gray-700">
        <span className="font-bold">Name:</span> {user.name}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Role:</span> {user.role}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Location:</span> {user.location}
      </p>
    </div>
  );
};

export default GreatGrandChild;
