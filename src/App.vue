<template>
  <v-app id="app" v-cloak>
    <transition
      :duration="{ enter: 500 ,leave: 0}"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <keep-alive :exclude="excludeList">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <base-alert />
    <bottomNavigation />
  </v-app>
</template>

<script>
import bottomNavigation from "@/components/bottom-navigation";
export default {
  name: "App",
  components: {
    bottomNavigation
  },
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