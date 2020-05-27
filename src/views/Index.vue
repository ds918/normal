<template>
  <v-sheet>
    <v-skeleton-loader
      type="image"
      :loading="loading"
      :width="$V(600)"
      class="mx-auto"
      :height="$V(300)"
    >
      <!-- <v-sheet :width="$V(300)" :height="$V(300)"> -->
      <v-img
        class="mx-auto"
        lazy-src="../../src/assets/img/logo.png"
        eager
        contain
        :src="img"
        :width="$V(600)"
        :height="$V(300)"
      ></v-img>
      <!-- </v-sheet> -->
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
<style lang="scss"></style>
