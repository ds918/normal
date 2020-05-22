<template>
  <div id="index">
    <van-button type="default">默认按钮</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import { Button } from "vant";

Vue.use(Button);
export default {
  created() {
    console.log(process.env);
  }
};
</script>
<style lang="scss" module>
</style>