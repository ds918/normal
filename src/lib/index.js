import Vue from "vue";
import axios, { http } from "@/api/index";
import moment from "moment";
import message from "./message";

Vue.$cancelList = []; // cancel token function list
Vue.prototype.$http = http; // axios实例化对象
Vue.prototype.$axios = axios; // axios
Vue.prototype.$moment = moment; // moment 时间管理
Vue.prototype.$_message = message; // 消息提示
