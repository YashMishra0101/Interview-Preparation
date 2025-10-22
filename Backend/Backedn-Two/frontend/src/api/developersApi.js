import axios from "axios";

export const DataFetch = async () => {
  const response = await axios.get("api/developers");
  return response.data;
};

export const DeveloperInfoAdd = async (developerInfo) => {
  const response = await axios.post("api/developers",developerInfo);
  return response.data;
};

export const DeleteDeveloper = async (id) => {
  const response = await axios.delete(`api/developers/${id}`);
  return response.data;
};

export const UpdateDeveloper = async ({ id, data }) => {
  const response = await axios.put(`api/developers/${id}`, data);
  return response.data;
}

// New function to get single developer
export const GetDeveloperById = async (id) => {
  const response = await axios.get(`api/developers/${id}`);
  return response.data;
};