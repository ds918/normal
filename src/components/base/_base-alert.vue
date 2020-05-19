<template>
  <v-snackbar v-model="SNACKBAR_SHOW">{{SNACKBAR_OPTIONS}}</v-snackbar>
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