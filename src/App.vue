<template>
  <v-app id="app" v-cloak>
    <template>
      <v-content :class="{ [$style.contentType]: !displayNavbar }">
        <transition
          :duration="{ enter: 200, leave: 0 }"
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
          mode="out-in"
        >
          <keep-alive :exclude="excludeList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </v-content>
      <base-alert />
      <base-overlay />
      <transition name="navigationAnimate">
        <bottomNavigation v-show="displayNavbar" />
      </transition>
    </template>
    <!-- <template>ERROR</template> -->
  </v-app>
</template>

<script>
import bottomNavigation from "@/components/bottom-navigation";
export default {
  name: "App",
  components: {
    bottomNavigation,
  },
  computed: {
    displayNavbar() {
      return this.displayNavbarList.every(
        (routeName) => routeName !== this.$route.name
      );
    },
  },
  data: () => ({
    excludeList: [],
    displayNavbarList: ["line"],
  }),
};
</script>
<style module lang="scss">
[v-cloak] {
  display: none;
}
.contentType {
  padding-bottom: 0 !important;
}
</style>
