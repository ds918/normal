import axios from "axios";
import Vue from 'vue';
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
    return Promise.reject(error.response.status);
  }
);

instance.interceptors.response.use(
  (response) => {
    handleCode(response.data.code)
    return response.data;
  },
  (error) => {
    if (axios.isCancel(error)) {
      console.log('api have cancled')
    } else {
      return Promise.reject(error);
    }
  }
);

const handleCode = (code) => {
  if (code === 0) {
    console.log('暂无数据')
  } else if (code === 1) {
    console.log('成功')
  } else {
    console.log('异常')
  }
}

const handleError = (errCode) => {
  if (errCode.response.status === 404) {
    console.log('404了')
  } else if (errCode.response.status === 500) {
    console.log('接口500了')
  }
  throw errCode.response.status
}

export const http = {
  get({ url = baseURL, baseURL = baseURL, data = "", timeout = timeout }) {
    return new Promise((resolve) => {
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
          Vue.$cancelList.push(cancel)
        })
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          handleError(error)
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
          function (data) {
            data = typeof data === "string" ? data : Qs.stringify(data);
            return data;
          },
        ],
        cancelToken: new CancelToken(function (cancel) {
          Vue.$cancelList.push(cancel)
        })
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          handleError(error)
        });
    });
  },
};

export default axios;
