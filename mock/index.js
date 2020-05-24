import Mock from "mockjs";
// import api from "./api";
const BASE_URL = process.env.VUE_APP_BASEURL;

Mock.setup({
  timeout: "10-100",
});

Mock.mock(`${BASE_URL}/test`, "post", {
  "name|1-10": 123,
});
Mock.mock(`${BASE_URL}/test1`, "post", {
  "name|1-10": [],
});
