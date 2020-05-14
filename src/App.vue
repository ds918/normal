<template>
  <div>
    <keep-alive :exclude="excludeList">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      excludeList: [],
      disabled: "xss"
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {}
};
</script>

<style lang="scss">
</style>
