import React, { useEffect, useState } from "react";
import axios from "axios";


const DataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/developers");
        console.log(response);
        console.log(response.data); //Axios wraps the server response inside data, which is why we access response.data. In contrast, with Fetch API or jQuery AJAX, the server JSON is returned directly without any automatic data wrapper.
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h2>Loading....</h2>;
  if (error) return <h2>Something went wrong... {error}</h2>;


  return (
    <>
      <div>
        <h1 className="text-center font-bold text-xl text-green-400 my-3">
          Developer Data
        </h1>
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
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DataFetching;
