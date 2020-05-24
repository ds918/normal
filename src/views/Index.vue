<template>
  <div id="index">MOCKJS</div>
</template>
<script>
export default {
  async activated() {
    let data = await this.$http.post("test", {
      id: 1,
    });
    console.log(data);
  },
};
</script>
<style lang="scss">
// #index {
// }
</style>
