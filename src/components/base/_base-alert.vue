<template>
  <v-snackbar v-model="SNACKBAR_SHOW" top :color="SNACKBAR_OPTIONS.color">{{SNACKBAR_OPTIONS.text}}</v-snackbar>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("snackbar", {
      SNACKBAR_SHOW: state => state.SNACKBAR_SHOW,
      SNACKBAR_OPTIONS: state => state.SNACKBAR_OPTIONS
    })
  }
};
</script>