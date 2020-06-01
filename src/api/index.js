import Qs from "qs";
import Vue from "vue";
import axios from "axios";
import { router } from "@/route/router";
const baseURL = process.env.VUE_APP_BASEURL;
const CancelToken = axios.CancelToken;
const timeout = 20000;

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
    router.push('/404');
  }
};

const handleError = (error) => {
  if (axios.isCancel(error)) {
    console.log(`${error.message} have canceled`);
  } else {
    // 全局的 error 处理
    router.push({ name: 'netError', params: { errStatus: error.response ? error.response.status : '连接超时' } })
  }
};

export const http = {
  get({ url = "", baseURL = baseURL, data = "", timeout = timeout } = {}) {
    if (typeof arguments[0] === "string") url = arguments[0];
    if (typeof arguments[1] === "object" && Object.keys(arguments[1]).length)
      data = arguments[1];
    return new Promise((resolve, reject) => {
      instance({
        url,
        method: "GET",
        params: data,
        baseURL,
        timeout,
        paramsSerializer: function (params) {
          params = typeof params === "string" ? Qs.parse(params) : params;
          return Qs.stringify(params, { arrayFormat: "brackets" });
        },
        cancelToken: new CancelToken(function (cancel) {
          Vue.$_cancelList.push({ cancel, message: url });
        }),
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error)
          handleError(error);
        });
    });
  },
  post({ url = "", baseURL = baseURL, data = "", timeout = timeout } = {}) {
    if (typeof arguments[0] === "string") url = arguments[0];
    if (typeof arguments[1] === "object" && Object.keys(arguments[1]).length)
      data = arguments[1];
    return new Promise((resolve, reject) => {
      instance({
        url,
        method: "POST",
        data,
        baseURL,
        timeout,
        transformRequest: [
          function (data) {
            data = typeof data === "string" ? data : Qs.stringify(data);
            return data;
          },
        ],
        cancelToken: new CancelToken(function (cancel) {
          Vue.$_cancelList.push({ cancel, message: url });
        }),
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error)
          handleError(error);
        });
    });
  },
};

export default axios;
