import { Link } from "react-router-dom";
const BlogsList = () => {
  const blogsListData = [
    { id: 1, title: "Introduction to React", excerpt: "Learn React basics..." },
    { id: 2, title: "Understanding Hooks", excerpt: "Deep dive into hooks..." },
    {
      id: 3,
      title: "React Router Guide",
      excerpt: "Master routing in React...",
    },
    { id: 4, title: "State Management", excerpt: "Learn about state..." },
  ];
  return (
    <>
      <div>
        <h2>Blogs List Info</h2>
        {blogsListData.map((data) => (
          <div key={data.id} className="py-6 border-2 border-amber-300">
            <p>Title:{data.title}</p>
            <Link to={`/blogInfo/${data.id}`}>
              {" "}
              <p className="text-green-400 font-semibold cursor-pointer">
                {data.excerpt}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsList;
