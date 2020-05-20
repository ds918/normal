<template>
  <v-app id="app" :class="[$style.app]" v-cloak>
    <bottomNavigation />
    <transition :duration="{ enter:500 }" enter-active-class="animate__animated animate__fadeIn">
      <keep-alive :exclude="excludeList">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <Base-alert />
  </v-app>
</template>

<script>
import bottomNavigation from "@/components/bottom-navigation";
export default {
  name: "App",
  components: { bottomNavigation },
  data: () => ({
    excludeList: []
  })
};
</script>
<style module>
[v-cloak] {
  display: none;
}
.app {
  padding-bottom: 50px;
}
</style>