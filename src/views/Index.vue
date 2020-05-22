<template>
  <div id="index">
    <v-btn :height="$V(46)" @click="$_message({'text': 'test',timeout: 1500,color:'success'})">btn</v-btn>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#index {
  height: 2000px;
  .v-size--default {
    font-size: 24px;
  }
}
</style>