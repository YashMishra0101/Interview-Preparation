import { useParams, useNavigate, Link } from "react-router-dom";

const BlogsInfo = () => {
  const navigate = useNavigate();
  const blogInfoData = {
    1: { title: "Introduction to React", content: "React is a JavaScript library for building user interfaces...", author: "John Doe", date: "Jan 15, 2025" },
    2: { title: "Understanding Hooks", content: "Hooks are functions that let you use state and other React features...", author: "Jane Smith", date: "Jan 20, 2025" },
    3: { title: "React Router Guide", content: "React Router is the standard routing library for React...", author: "Mike Johnson", date: "Jan 25, 2025" },
    4: { title: "State Management", content: "State management is crucial in React applications...", author: "Sarah Williams", date: "Feb 1, 2025" },
    5: { title: "Handling Forms in React", content: "Forms in React can be controlled or uncontrolled...", author: "Chris Lee", date: "Feb 5, 2025" },
    6: { title: "React Performance Optimization", content: "Optimizing performance in React involves techniques like memoization...", author: "Emily Davis", date: "Feb 10, 2025" },
    7: { title: "Context API in Depth", content: "The Context API helps avoid prop drilling...", author: "David Kim", date: "Feb 15, 2025" },
    8: { title: "React with TypeScript", content: "Using TypeScript with React improves code quality...", author: "Sophia Brown", date: "Feb 20, 2025" },
    9: { title: "React Testing Basics", content: "Testing in React can be done using tools like Jest...", author: "James Wilson", date: "Feb 25, 2025" },
    10: { title: "Deploying React Apps", content: "React apps can be deployed to services like Vercel or Netlify...", author: "Olivia Martinez", date: "Mar 1, 2025" },
  };

  const { id } = useParams();
  const blog = blogInfoData[id];

  return (
    <div className="max-w-xl mx-auto mt-8 p-4">
      {!blog ? (
        <div className="text-center p-4 border rounded-md bg-gray-50">
          <p className="text-red-500 font-semibold mb-2">Post not found</p>
          <Link
            to="/blogsList"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Back to Blogs List
          </Link>
        </div>
      ) : (
        <div className="border rounded-md p-4 bg-white shadow-sm space-y-3">
          <h1 className="text-xl font-bold">{blog.title}</h1>
          <p>{blog.content}</p>
          <p className="text-sm text-gray-500">
            By {blog.author} | {blog.date}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="border px-3 py-1 rounded hover:bg-gray-100 cursor-pointer"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsInfo;
