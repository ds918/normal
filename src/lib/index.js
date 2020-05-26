import Vue from "vue";
import axios, { http } from "@/api/index";
import moment from "moment";
import message from "./message";
import { showoverlay, hideoverlay } from "./overlay";

Vue.$_cancelList = []; // cancel token function list
Vue.prototype.$_http = http; // axios实例化对象
Vue.prototype.$_axios = axios; // axios
Vue.prototype.$_moment = moment; // moment 时间管理
Vue.prototype.$_message = message; // 消息提示
Vue.prototype.$_showoverlay = showoverlay; // 显示遮罩层
Vue.prototype.$_hideoverlay = hideoverlay; // 隐藏遮罩层
