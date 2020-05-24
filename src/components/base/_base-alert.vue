<template>
  <v-snackbar
    :timeout="SNACKBAR_OPTIONS.timeout"
    v-model="SNACKBAR_SHOW"
    top
    :color="SNACKBAR_OPTIONS.color"
    >{{ SNACKBAR_OPTIONS.text }}</v-snackbar
  >
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "base-alert",
  computed: {
    ...mapState("snackbar", {
      SNACKBAR_OPTIONS: (state) => state.SNACKBAR_OPTIONS,
    }),
    SNACKBAR_SHOW: {
      get() {
        return this.$store.state.snackbar.SNACKBAR_SHOW;
      },
      set() {
        this.$store.commit("snackbar/CLOSE_SNACKBAR");
      },
    },
  },
};
</script>
