<template>
  <v-sheet></v-sheet>
</template>
<script>
export default {
  data: () => ({}),
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
<style lang="scss"></style>
