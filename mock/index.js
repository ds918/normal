import Mock from "mockjs";
import api from "./api";
const BASE_URL = process.env.VUE_APP_BASEURL;

Mock.setup({
  timeout: "5000-10000",
});

api.forEach((item) => {
  Mock.mock(`${BASE_URL}/${item.url}`, item.type, item.callback);
});
