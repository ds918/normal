<template>
  <div>
    <router-link :to="{name:'ds',query: {name:'dongsen',age:24}}" active-class="color">
      <test></test>
    </router-link>
    <router-link tag="p" :to="{name:'ds',query: {name:'dongsen',age:24}}" exact>index</router-link>
    <test></test>
  </div>
</template>
<script>
import test from "@/components/test";
export default {
  name: "index",
  components: {
    test
  },
  created() {}
};
</script>
<style lang="scss" scoped>
div {
  font-size: 75px;
}
.color {
  color: red;
}
</style>
