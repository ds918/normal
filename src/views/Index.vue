<template>
  <div>
    <!-- <router-link to="/test">123123</router-link> -->
    <template v-for="(item, index) in arr">
      <div :key="index">{{ item }}---{{ index }}</div>
    </template>
    <table>
      <Todo @click="log" :item="list"> </Todo>
    </table>
  </div>
</template>
<script>
import Todo from "@/components/Todo";
export default {
  name: "index",
  components: {
    Todo,
  },
  data() {
    return {
      show: true,
      arr: [1, 2, 3],
      input: "",
      list: { name: "dongsen", age: 24 },
      val: "",
      father: "",
    };
  },
  computed: {},
  created() {},
  methods: {
    log() {
      console.log(1);
    },
    outer() {
      console.log("outer");
    },
    next() {
      console.log("inner");
      this.arr.push(4);
    },
  },
};
</script>
<style lang="scss" module>
.outer {
  padding: 100px;
  height: 200px;
}
</style>
