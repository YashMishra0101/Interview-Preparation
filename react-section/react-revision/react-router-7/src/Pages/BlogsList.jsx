import { Link } from "react-router-dom";

const BlogsList = () => {
  const blogsListData = [
    { id: 1, title: "Introduction to React", excerpt: "Learn React basics..." },
    { id: 2, title: "Understanding Hooks", excerpt: "Deep dive into hooks..." },
    { id: 3, title: "React Router Guide", excerpt: "Master routing in React..." },
    { id: 4, title: "State Management", excerpt: "Learn about state..." },
    { id: 5, title: "React Performance Tips", excerpt: "Optimize your React apps..." },
    { id: 6, title: "Context API Explained", excerpt: "Simplify global state..." },
    { id: 7, title: "React and TypeScript", excerpt: "Strong typing in React..." },
    { id: 8, title: "Building Forms in React", excerpt: "Master controlled components..." },
    { id: 9, title: "React Testing Library", excerpt: "Write better tests for your UI..." },
    { id: 10, title: "React with Tailwind CSS", excerpt: "Style apps faster with Tailwind..." },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Blogs List
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {blogsListData.map((data) => (
          <div
            key={data.id}
            className="p-5 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {data.title}
            </h3>
            <p className="text-gray-600 mb-4">{data.excerpt}</p>

            <Link
              to={`/blogInfo/${data.id}`}
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsList;
