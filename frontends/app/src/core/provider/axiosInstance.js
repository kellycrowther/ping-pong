import Axios from "axios-observable";

const SOFTTOUCH_ENDPOINT = "http://localhost:5000/api";

const axiosInstance = Axios.create({
  baseURL: SOFTTOUCH_ENDPOINT,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
