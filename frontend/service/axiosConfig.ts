import axios from "axios";
import { BASE_URL } from "./APIRoutes";
import { getCookie } from "cookies-next";

// axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;

axios.interceptors.response.use(null, (error: any) => {
  if (error) {
    if (error.response) {
      if (error.response.data)
        if (!error.response.data.state) {
          // NextResponse.redirect("/login?isLogin=1");
          console.log(error.response.data.error);
          if (error.response.data.message === "توکن مورد تایید نمیباشد") {
          }
          // message.error("خطا رخ داد", error.response.data.message);
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
