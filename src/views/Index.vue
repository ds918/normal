<template>
  <div>
    <router-link to="/test">123123</router-link>
    <!-- 1231 -->
    <Todo :my.sync="outter" :item="list">
      <BaseButton green>button</BaseButton>
      <BaseButton color="red">button</BaseButton>
    </Todo>
    <BaseTest></BaseTest>
  </div>
</template>
<script>
import Todo from "@/components/Todo";
export default {
  name: "index",
  components: {
    Todo
  },
  comments: true,
  data() {
    return {
      list: { name: "dongsen", age: 23 },
      outter: ""
    };
  },
  provide: function() {
    return {
      log: this.log
    };
  },
  computed: {},
  activated() {
    console.log(this.author);
  },
  methods: {
    log() {
      console.log(1);
    },
    log1() {
      console.log(2);
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