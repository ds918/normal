<template>
  <V-overlay v-model="overlayValue">
    <div class="d-flex justify-center align-center flex-column">
      <v-progress-circular class="mb-2" indeterminate> </v-progress-circular>
      <div>loading</div>
    </div>
  </V-overlay>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState("overlay", {
    overlayValue: (state) => state.OVERLAY_VALUE,
  }),
};
</script>
