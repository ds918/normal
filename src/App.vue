<template>
  <keep-alive :exclude="excludeList">
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    excludeList: []
  })
};
</script>