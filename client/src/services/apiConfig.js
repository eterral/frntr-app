import axios from "axios";
import { app } from "faker/lib/locales/en";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://floating-atoll-11194.herokuapp.com/api"
      : "http://localhost:3000/api/",
});

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

app.inteceptors.request.use(async function (config) {
  config.headers(`Authorization`) = await getToken()
  return config
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
})

export default api;
