<template>
  <button
    :style="[
      {
        backgroundColor: $attrs[Object.keys($attrs)[0]]
          ? $attrs[Object.keys($attrs)[0]]
          : Object.keys($attrs)[0],
      },
    ]"
  >
    <slot name="ss"></slot>
    <slot name="fs"></slot>
  </button>
</template>
<script>
export default {
  inheritAttrs: false,
  created() {}
};
</script>
