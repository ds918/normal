<template>
  <div>
    <router-link to="/test">123123</router-link>
    <Todo :my.sync="outter" :item="list">
      <BaseButton v-slot green>button</BaseButton>
      <template v-slot:add>
        <BaseButton @click="log" color="red">button</BaseButton>
      </template>
    </Todo>
    <BaseTest @click="log" name="dongsen123456">456</BaseTest>
    <transition name="fade">
      <div v-if="show">hello,world</div>
    </transition>
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
      list: { name: "dongsen", age: 23 },
      outter: "",
      show: false,
    };
  },
  provide: function() {
    return {
      log: this.log,
    };
  },
  computed: {},
  created() {},
  methods: {
    log() {
      this.show = !this.show;
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
