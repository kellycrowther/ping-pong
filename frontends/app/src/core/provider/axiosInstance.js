import Axios from "axios-observable";

const { NODE_ENV } = process.env;

const PING_PONG_ENDPOINT =
  NODE_ENV === "production"
    ? "https://ping-pong-kelly.herokuapp.com/api"
    : "http://localhost:5000/api";

const axiosInstance = Axios.create({
  baseURL: PING_PONG_ENDPOINT,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
});

export { axiosInstance };
