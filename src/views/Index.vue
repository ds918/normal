<template>
  <div>
    <!-- <router-link to="/test">123123</router-link> -->
    <template v-for="(item,index) in arr">
      <div :key="index">{{item}}---{{index}}</div>
    </template>
    <table>
      <Todo
        v-for="(item,index) in [{name:1},{name:2},{name:3},{name:4}]"
        :key="index"
        :item="item"
        :title.sync="father"
      >
        <template v-slot:header="{ item }">
          <h1>{{item}}</h1>
        </template>
      </Todo>
    </table>
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
      arr: [1, 2, 3],
      input: "",
      list: (() => "Todo")(),
      val: "",
      father: ""
    };
  },
  computed: {},
  created() {
    console.log(this.$root);
  },
  methods: {
    outer() {
      console.log("outer");
    },
    next() {
      console.log("inner");
      this.arr.push(4);
    }
  }
};
</script>
<style lang="scss" module>
.outer {
  padding: 100px;
  height: 200px;
}
</style>
