<template>
  <button
    :style="[
      {
        backgroundColor: $attrs[Object.keys($attrs)[0]]
          ? $attrs[Object.keys($attrs)[0]]
          : Object.keys($attrs)[0],
      },
    ]"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  inheritAttrs: false,
  created() {
    console.log(this);
  },
};
</script>
