import config from "../../config/config";

const ACME_API_KEY = config.REACT_APP_ACME_API_KEY;

export const ajaxConfig = {
  headers: {
    "x-acme-api-key": ACME_API_KEY,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "application/json",
  },
};
