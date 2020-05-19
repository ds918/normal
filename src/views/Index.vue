<template>
  <div
    :class="[$style.outer]"
    @click="$_message({
    value: 'dongsen',
    timeout: '2000',
    type: 'success'
  })"
  ></div>
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