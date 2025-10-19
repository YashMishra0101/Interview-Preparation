  import axios from "axios";

  export const DataFetch = async () => {
    const response = await axios.get("http://localhost:5000/developers");
    return response.data;
  };