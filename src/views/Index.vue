<template>
  <div>
    <!-- <router-link to="/test">123123</router-link> -->
    <div :style="flex">index</div>
  </div>
</template>
<script>
export default {
  name: "index",
  data: () => {
    return {
      flex: {
        transform: "rotate(180deg)"
      }
    };
  }
};
</script>
<style lang="scss" module></style>
