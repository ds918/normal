import axios from "axios";
import Qs from "qs";
const baseURL = process.env.VUE_APP_BASEURL;
const timeout = 100000;

let instance = axios.create({
  baseURL,
  timeout,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      console.log("获取数据失败");
    } else if (response.data.code == 2) {
      console.log("没有数据");
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const http = {
  get({ url = baseURL, baseURL = baseURL, data = "", timeout = timeout }) {
    return new Promise((resolve) => {
      instance({
        url,
        method: "GET",
        params: data,
        baseURL,
        timeout,
        paramsSerializer: function(params) {
          params = typeof params === "string" ? Qs.parse(params) : params;
          return Qs.stringify(params, { arrayFormat: "brackets" });
        },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          throw error;
        });
    });
  },
  post({ url = "", baseURL = baseURL, data = "", timeout = timeout }) {
    return new Promise((resolve) => {
      instance({
        url,
        method: "POST",
        data,
        baseURL,
        timeout,
        transformRequest: [
          function(data) {
            data = typeof data === "string" ? data : Qs.stringify(data);
            return data;
          },
        ],
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          throw error;
        });
    });
  },
};

export default axios;
