<template>
  <v-sheet>
    <v-skeleton-loader
      class="mx-auto"
      max-width="200px"
      max-height="250px"
      type="image"
      :loading="loading"
    >
      <v-img width="750px" contain :src="img"></v-img>
    </v-skeleton-loader>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    img: "",
    loading: true
  }),
  activated() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let {
        data: { data, code }
      } = await this.$_http.get("Wechat/wxlogin");
      console.log(data, code);
      this.img = data.image;
      this.loading = false;
    }
  }
};
</script>
<style lang="scss">
</style>
