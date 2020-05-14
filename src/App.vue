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
      excludeList: []
    };
  }
};
</script>

<style lang="scss">
</style>
