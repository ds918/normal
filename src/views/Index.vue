<template>
  <v-sheet></v-sheet>
</template>
<script>
import _ from "lodash";
export default {
  data: () => ({}),
  activated() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let {
          data: { data, code },
        } = await this.$_http.post("test", {
          test: true,
        });
        console.log(data, code, _);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss"></style>
