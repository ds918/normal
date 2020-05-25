<template>
  <div id="index">MOCKJS</div>
</template>
<script>
export default {
  activated() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let {
        data: { data, code }
      } = await this.$_http.get("Wechat/wxlogin");
      console.log(data, code);
    }
  }
};
</script>
<style lang="scss">
// #index {
// }
</style>
