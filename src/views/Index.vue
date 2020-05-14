<template>
  <div>
    <!-- <router-link to="/test">123123</router-link> -->
    <template v-for="(item,index) in arr">
      <div :key="index">{{item}}---{{index}}</div>
    </template>
    <table>
      <thead is="Todo"></thead>
    </table>
    <div :class="$style.outer" @click.passive="outer">
      <input type="text" @keyup.passive="inp" />
    </div>
  </div>
</template>
<script>
import Todo from "@/components/Todo";
export default {
  name: "index",
  components: {
    Todo
  },
  data() {
    return {
      show: true,
      arr: [1, 2, 3]
    };
  },
  computed: {},
  created() {},
  methods: {
    outer() {
      console.log("outer");
    },
    next() {
      console.log("inner");
      this.arr.push(4);
    },
    inp() {}
  }
};
</script>
<style lang="scss" module>
.outer {
  padding: 100px;
  height: 2000px;
}
</style>
