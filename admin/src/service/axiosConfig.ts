import { message } from "antd";
import axios from "axios";
import { BASE_URL } from "./APIRoutes";

// axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

axios.interceptors.response.use(null, (error) => {
  if (error) {
    if (error.response) {
      if (error.response.data)
        if (!error.response.data.state) {
          // NextResponse.redirect("/login?isLogin=1");
          console.log(error.response.data.error);
          if (error.response.data.message === "توکن مورد تایید نمیباشد") {
          }
          message.error("خطا رخ داد", error.response.data.message);
        }
    }
  }
  return Promise.reject(error);
});

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};
