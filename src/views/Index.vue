<template>
  <div id="index">
    <van-button type="default">默认按钮</van-button>
    <van-picker show-toolbar title="标题" :columns="columns" />
  </div>
</template>
<script>
import Vue from "vue";
import { Button, Picker } from "vant";
Vue.use(Button).use(Picker);
export default {
  data() {
    return {
      columns: [
        // 第一列
        {
          values: ["周一", "周二", "周三", "周四", "周五"],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ["上午", "下午", "晚上"],
          defaultIndex: 1,
        },
      ],
    };
  },
};
</script>
<style lang="scss" module></style>
