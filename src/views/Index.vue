<template>
  <div>
    <router-link to="/test">123123</router-link>
    <Todo :my.sync="outter" :item="list">
      <BaseButton green>button</BaseButton>
      <BaseButton color="red">button</BaseButton>
    </Todo>
    <BaseTest v-showname="123"></BaseTest>
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
  created() {},
  methods: {},
  directives: {
    showname: {
      inserted(el, binding, vnode) {
        console.log(el, binding, vnode);
      }
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