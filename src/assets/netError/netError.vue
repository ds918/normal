<template>
  <v-sheet class="d-flex justify-center align-center flex-column" style="height: 100%">
    <v-sheet>当前网络{{errStatus}}，请稍后再试</v-sheet>
  </v-sheet>
</template>
<script>
export default {
  props: {
    errStatus: [Number, String]
  }
};
</script>