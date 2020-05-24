<template>
  <div :id="$style.navigation">
    <v-bottom-navigation
      app
      :height="$V(100)"
      color="blue"
      mandatory
      background-color="#fff"
      v-model="NAVIGATION_INDEX"
    >
      <v-btn height="100%" min-width="33.33333%" to="/" value="0">
        <span>Recents</span>
        <v-icon :size="$V(34)">mdi-history</v-icon>
      </v-btn>
      <v-btn height="100%" min-width="33.33333%" to="/test" value="1">
        <span>Favorites</span>
        <v-icon :size="$V(34)">mdi-heart</v-icon>
      </v-btn>
      <v-btn height="100%" min-width="33.33333%" to="/test1" value="2">
        <span>Nearby</span>
        <v-icon :size="$V(34)">mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  computed: {
    NAVIGATION_INDEX: {
      get() {
        return this.$store.state.navigation.NAVIGATION_INDEX;
      },
      set(index) {
        this.$store.commit("navigation/NAVIGATION_TARGET", index);
      },
    },
  },
};
</script>
<style lang="scss" module>
#navigation {
  height: 100px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>
