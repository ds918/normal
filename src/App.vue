<template>
  <v-app v-cloak>
    <transition :duration="{ enter:500 }" enter-active-class="animate__animated animate__fadeIn">
      <keep-alive :exclude="excludeList">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <v-bottom-navigation app background-color="#000" color="red" grow height="64px" dark value="0">
      <v-btn>one</v-btn>
      <v-btn>one</v-btn>
      <v-btn>one</v-btn>
      <v-btn>one</v-btn>
    </v-bottom-navigation>
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