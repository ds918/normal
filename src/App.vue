<template>
  <div>
    <transition>
      <keep-alive :exclude="excludeList">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      excludeList: []
    };
  }
};
</script>

<style lang="scss"></style>
