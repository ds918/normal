<template>
  <div>
    <router-link :to="{name: 'ds',query: {id:1}}">index</router-link>
    <router-link :to="{name: 'ds',query: {id:2}}" replace>index</router-link>
  </div>
</template>
<script>
export default {
  name: "route",
  created() {}
};
</script>
<style lang="scss"></style>
