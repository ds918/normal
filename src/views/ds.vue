<template>
  <div>
    <router-link :to="{name: 'dss',params: {age: 100}}">100ages</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "ds",
  data() {
    return {};
  },
  props: ["name"],
  created() {
    console.log(2);
  },
  mounted() {
    console.log(3);
  },
  activated() {},
  methods: {},
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    setTimeout(() => {
      next(() => {
        console.log(1);
      });
    }, 3000);
  },
  beforeRouterUpdate() {
    console.log("update");
  }
};
</script>
