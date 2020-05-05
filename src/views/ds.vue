<template>
  <div>
    <router-link :to="{name: 'ds',params: {age: 100}}">100ages</router-link>
  </div>
</template>
<script>
export default {
  name: "ds",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  methods: {}
};
</script>
