<template v-pre>
  <div>
    <router-link to="/test">123123</router-link>
    <Todo :my.sync="outter" :item="list">
      <template v-slot>
        <BaseButton green>
          <template v-slot:fs>buttonfs</template>
        </BaseButton>
        <BaseButton @click.native="log" color="red">
          <template v-slot:ss>buttonss</template>
        </BaseButton>
      </template>
    </Todo>
    <BaseTest @click="log" name="dongsen"></BaseTest>
    <transition name="fade">
      <div v-show="show">hello,world</div>
    </transition>
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
      outter: "",
      show: false
    };
  },
  computed: {},
  created() {
    console.log(this);
  },
  methods: {
    log() {
      this.show = !this.show;
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
