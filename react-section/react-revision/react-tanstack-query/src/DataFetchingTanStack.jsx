import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DataFetching = () => {
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/developers");
    return response.data;
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["developers"],
    queryFn: fetchData,
  });

  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return <h2>Something went wrong... {error.message}</h2>;

  return (
    <>
      <div>
        <ul>
          {data.map((info) => (
            <li
              key={info.id}
              className="border-2 border-green-400 py-3 mb-3 pl-3"
            >
              <p>Name:{info.name}</p>
              <p>Country:{info.country}</p>
              <p>Experience:{info.experience}</p>
              <p>Salary:{info.salary} USD</p>
              <p>Previous Company:{info.previousCompany}</p>
              <p>Skills:{info.skills.join(", ")}</p>
              <div className="mt-3">
                <button className="border-2 bg-yellow-300 p-2 rounded-full border-yellow-400 cursor-pointer ">
                  Edit
                </button>
                <button className="border-2 bg-red-300 p-2 rounded-full border-red-400 ml-2 cursor-pointer">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DataFetching;
