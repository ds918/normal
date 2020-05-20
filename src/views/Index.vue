<template>
  <div :class="[$style.outer]" @click="$_message({
    text: 'dongsen',
    color: 'error'
  })"></div>
</template>
<script>
export default {
  data: () => ({}),
  methods: {}
};
</script>
<style lang="scss" module>
.outer {
  height: 2000px;
}
</style>