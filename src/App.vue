<template>
  <v-app id="app" v-cloak>
    <transition :duration="{ enter:500 }" enter-active-class="animate__animated animate__fadeIn">
      <keep-alive :exclude="excludeList">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <base-alert />
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