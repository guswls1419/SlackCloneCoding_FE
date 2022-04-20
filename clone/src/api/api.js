import axios from "axios";

const api = axios.create({
  baseURL: "http://3.38.104.97:8080",
});
export default api;
