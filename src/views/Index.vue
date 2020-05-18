<template>
  <div :class="$style.outer"></div>
</template>
<script>
export default {
  data: () => ({
    tay: true
  })
};
</script>
<style lang="scss" module>
.outer {
  height: 2000px;
}
</style>