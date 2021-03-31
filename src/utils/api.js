import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});

export const getAllRockets = () => {
  return axiosInstance.get("/rockets");
};

export const getRocketInfo = (id) => {
  return axiosInstance.get(`/rockets/${id}`);
};

export const getAllCapsules = () => {
  return axiosInstance.get("/capsules");
};

export const getCapsuleInfo = (id) => {
  return axiosInstance.get(`/capsules/${id}`);
};

// Mocked login - id userName is "admin" an admin respose is fetched back
export const login = (userName, password) => {
  if (userName.toLowerCase() === "john") {
    return axios.get(
      "https://run.mocky.io/v3/b99174e8-3095-44d6-9781-be9684e484a4"
    );
  } else {
    return axios.get(
      "https://run.mocky.io/v3/94e2ad85-259c-4893-afe4-4a74a75cc33a"
    );
  }
};
