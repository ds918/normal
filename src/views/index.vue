<template>
  <div>
    <router-link tag="div" :to="{ name: 'ds', params: { age: 24 } }"
      >index</router-link
    >
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>
<style lang="scss" scoed>
div {
  font-size: 18px;
}
</style>
