<template>
  <div>
    <router-link to="/">ds</router-link>
    <router-link to="/ds/dss">dss</router-link>
    <router-link :to="{name: 'ds',query: {id:3}}">finally</router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "ds",
  created() {},
  mounted() {},
  activated() {}
};
</script>
