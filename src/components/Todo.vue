<template>
  <div class="ds1" placeholder="456" self="yours">
    <input :key="item.name" type="text" @input="$emit('update:title',$event.target.value)" />
    <slot name="header"></slot>
  </div>
</template>
<script>
export default {
  name: "todo",
  inheritAttrs: false,
  model: {
    event: "input"
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        name: "dongsen"
      }),
      required: true
    }
  },
  created() {
    console.log(this.$root);
  },
  data: () => {
    return {};
  },
  methods: {}
};
</script>