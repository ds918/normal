<template>
  <v-app v-cloak>
    <keep-alive :exclude="excludeList">
      <router-view></router-view>
    </keep-alive>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    excludeList: []
  })
};
</script>
<style module>
[v-cloak] {
  display: none;
}
</style>