import axios from "axios";

let apiURL;

if (process.env.NODE_ENV === "production") {
  apiURL = "https://api.ezhedgefunds.com";
} else {
  apiURL = "http://localhost:3000";
}
const axiosInstance = axios.create({
  baseURL: apiURL,
  timeout: 10000, // You can adjust the timeout as needed
  withCredentials: true,
});

export default axiosInstance;
 
