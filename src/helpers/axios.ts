import axios, {
  AxiosError,
  AxiosResponse,
} from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
instance.interceptors.response.use(
  (param: AxiosResponse) => {
    return param;
  },
  (error: AxiosError<any>) => {
    if (axios.isAxiosError(error)) {
      toast(
        `Error ${error.response?.status}: ${error.response?.statusText} [url ${error?.config.url}]`
      );

      return window.Promise.reject(error);
    }
  }
);
export default instance;
