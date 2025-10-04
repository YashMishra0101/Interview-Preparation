import { useParams, useNavigate, Link } from "react-router-dom";

const BlogsInfo = () => {
  const blogInfoData = {
    1: {
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces. It was created by Facebook and is maintained by Facebook and a community of individual developers and companies...",
      author: "John Doe",
      date: "Jan 15, 2025",
    },
    2: {
      title: "Understanding Hooks",
      content:
        "Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState and useEffect...",
      author: "Jane Smith",
      date: "Jan 20, 2025",
    },
    3: {
      title: "React Router Guide",
      content:
        "React Router is the standard routing library for React. It enables navigation between different views in your application...",
      author: "Mike Johnson",
      date: "Jan 25, 2025",
    },
    4: {
      title: "State Management",
      content:
        "State management is crucial in React applications. You can use useState for local state, Context API for global state, or libraries like Redux...",
      author: "Sarah Williams",
      date: "Feb 1, 2025",
    },
  };
  const { id } = useParams();
  return (
    <>
      {
        if(!blogInfoData[id]){
            
        }
      }
      <div>
        <p>{blogInfoData[id].title}</p>
        <p>{blogInfoData[id].content}</p>
        <p>{blogInfoData[id].author}</p>
        <p>{blogInfoData[id].date}</p>
      </div>
    </>
  );
};

export default BlogsInfo;
