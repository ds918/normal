<template>
  <div>
    <router-link :to="{name:'ds',query: {name:'dongsen',age:24}}" active-class="color">
      <test>{{num1}}</test>
      <test>{{num2}}</test>
    </router-link>
    <router-link tag="p" :to="{name:'ds',query: {name:'dongsen',age:24}}" exact>index</router-link>
    <test></test>
  </div>
</template>
<script>
import test from "@/components/test";
import { mapState } from "vuex";
export default {
  name: "index",
  components: {
    test
  },
  activated() {
    this.$store.commit("add");
    this.$store.commit("less");
  },
  // computed: {
  //   num1() {
  //     return this.$store.state.count;
  //   },
  //   num2() {
  //     return this.$store.state.list;
  //   }
  // },
  computed: mapState({
    num1: state => state.count,
    num2: state => state.list
  })
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