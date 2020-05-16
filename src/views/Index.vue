<template>
  <div>
    <!-- <router-link to="/test">123123</router-link> -->
    <table>
      <!-- 1231 -->
      <Todo :my.sync="outter" :item="list">
        <BaseButton>button</BaseButton>
      </Todo>
    </table>
    {{outter}}
    <div @click="one">12312313</div>
    <div @click="$emit('test')">22222222222222222</div>
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
  created() {},
  methods: {
    one() {
      this.$off("test");
      this.$on("test", function() {
        console.log("test");
      });
    },
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
.btn1 {
  background-color: red;
}
.btn2 {
  background-color: orange;
}
</style>