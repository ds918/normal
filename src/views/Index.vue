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
      try {
        let {
          data: { data, code },
        } = await this.$_http.get("Wechat/wxlogin", { id: 1 });
        console.log(data, code);
      } catch (err) {
        console.log(err);
        throw err;
      }
      console.log(1);
    },
  },
};
</script>
<style lang="scss">
// #index {
// }
</style>
