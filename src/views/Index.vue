<template>
  <v-sheet>
    <v-skeleton-loader
      type="image"
      :loading="loading"
      :width="$V(600)"
      class="mx-auto"
      :height="$V(300)"
      transition="slide-x-transition"
    >
      <v-img
        class="mx-auto"
        eager
        :src="img"
        lazy-src="https://picsum.photos/id/11/100/60"
        :width="$V(600)"
        :height="$V(300)"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
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
