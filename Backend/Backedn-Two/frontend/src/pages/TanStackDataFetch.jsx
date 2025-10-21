import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { DataFetch, DeleteDeveloper } from "../api/developersApi";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const TanStackDataFetch = () => {
  const queryClient = useQueryClient();
const navigate = useNavigate(); // At the top of your component

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["developers"],
    queryFn: DataFetch,
    // staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  const deleteMutation = useMutation({
    mutationFn: DeleteDeveloper,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["developers"] });
      toast.success("Developer deleted successfully!");
    },
    onError: (error) => {
      console.error("Delete error:", error);
      toast.error("Failed to delete developer. Please try again.");
    },
  });

  // Handle delete
  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deleteMutation.mutate(id);
    }
  };

  //handel edit
  const handleEdit = (id) => {
    navigate(`/editInfo/${id}`);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  if (isError) return <p>Error:{error.message}</p>;
  console.log(data);
  return (
    <>
      <div>
        <h2 className="mb-4 mt-6 text-center text-green-400 font-bold text-xl">
          Developer Info
        </h2>
        {data?.map((info) => (
          <div key={info?.id} className="border-2 border-green-400 mb-3 p-3">
            <p>Name: {info?.name}</p>
            <p>Country: {info?.country}</p>
            <p>Experience: {info?.experience}</p>
            <p>Current Position: {info?.currentPosition}</p>
            <p>Salary: {info?.salary} USD</p>
            <p>Previous Company: {info?.previousCompany}</p>
            <p>Skills: {info?.skills?.join(", ")}</p>
            <div className="mt-3">
              <button
                onClick={() => handleEdit(info?.id)}
                className="bg-amber-400 border-2 border-yellow-500 p-2 rounded-2xl cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(info?.id, info?.name)}
                className="bg-green-400 border-2 border-green-500 p-2 rounded-2xl cursor-pointer ml-3"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TanStackDataFetch;

// const { data, error, isLoading, isError } = useQuery({
//   queryKey: ["developers"], //Unique identifier for this query,If another component uses the same queryKey, React Query will reuse the cached data.
//   queryFn: DataFetch, //The function that actually fetches the data from your backend API, Must return a promise (like axios.get).
//   staleTime: 5 * 60 * 1000, //5 minutes:Time in milliseconds for which cached data is considered fresh,During this time, React Query won’t refetch data even if the component re-renders,Yes, if you manually refresh the page (F5 or Ctrl+R), the data will be fetched again from the backend — even if staleTime is set.
//   refetchOnWindowFocus: false, //By default, React Query refetch data when the window gains focus, Setting it false disables this behavior,Useful when you don’t want unnecessary API calls when users switch tabs.
// });
