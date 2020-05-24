import axios from "axios";
import Vue from "vue";
import Qs from "qs";
const baseURL = process.env.VUE_APP_BASEURL;
const CancelToken = axios.CancelToken;
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
    handleCode(response);
    return {
      data: {
        code: response.data.code,
        msg: response.data.msg,
        data: response.data.data,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleCode = (response) => {
  if (response.data.code === 2) {
    location.href = "/404";
  }
};

const handleError = (error) => {
  if (axios.isCancel(error)) {
    console.log(`${error.message} have canceled`);
  } else {
    if (error.response.status === 404) {
      console.log("404了");
    } else if (error.response.status === 500) {
      console.log("接口500了");
    }
    throw error;
  }
};

export const http = {
  get({ url = "", baseURL = baseURL, data = "", timeout = timeout } = {}) {
    if (typeof arguments[0] === "string") url = arguments[0];
    if (typeof arguments[1] === "object" && Object.keys(arguments[1]).length)
      data = arguments[1];
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
        cancelToken: new CancelToken(function(cancel) {
          Vue.$cancelList.push({ cancel, message: url });
        }),
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          handleError(error);
        });
    });
  },
  post({ url = "", baseURL = baseURL, data = "", timeout = timeout } = {}) {
    if (typeof arguments[0] === "string") url = arguments[0];
    if (typeof arguments[1] === "object" && Object.keys(arguments[1]).length)
      data = arguments[1];
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
        cancelToken: new CancelToken(function(cancel) {
          Vue.$cancelList.push({ cancel, message: url });
        }),
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          handleError(error);
        });
    });
  },
};

export default axios;
