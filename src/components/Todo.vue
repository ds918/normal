<template>
  <div>
    <input :class="[$style.inp]" type="text" @input="$emit('update:my',$event.target.value)" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "todo",
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true
    },
    title: String
  },
  inject: ["log"],
  created() {
    console.log(this);
  },
  data: () => {
    return {};
  },
  methods: {
    inner() {
      console.log("inner");
    }
  }
};
</script>
<style lang="scss" module>
.inp {
  border: 1px solid #000;
}
</style>
