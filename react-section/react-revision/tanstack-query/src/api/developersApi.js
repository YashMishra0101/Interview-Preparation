import axios from "axios";

export const DataFetch = async () => {
  const response = await axios.get("http://localhost:5000/developers");
  return response.data;
};

export const DeveloperInfoAdd = async (developerInfo) => {
  const response = await axios.post("http://localhost:5000/developers",developerInfo);
  return response.data;
};

export const DeleteDeveloper = async (id) => {
  const response = await axios.delete(`http://localhost:5000/developers/${id}`);
  return response.data;
};
