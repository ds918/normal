<template>
  <div id="navigation">
    <v-bottom-navigation app :height="$V(120)" color="success" mandatory>
      <v-btn height="100%" min-width="33.33333%">
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn height="100%" min-width="33.33333%">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn height="100%" min-width="33.33333%">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#navigation {
  .v-item-group.v-bottom-navigation .v-btn {
    font-size: 30px;
  }
}
</style>