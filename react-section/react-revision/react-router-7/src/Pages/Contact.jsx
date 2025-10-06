import { Link } from  "react-router-dom";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">Contact Page</h1>
      <p className="text-gray-700">This is the Contact page.</p>

      <Link to='/' className="relative top-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ">
        Home Button
      </Link>
    </div>
  );
};

export default Contact;
