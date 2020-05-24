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
        data: { data },
      } = await this.$http.post("test", {
        id: 1,
      });
      console.log(data);
    },
  },
};
</script>
<style lang="scss">
// #index {
// }
</style>
