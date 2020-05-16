<template>
  <div>
    <input type="text" />
  </div>
</template>
<script>
export default {
  name: "todo",
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this);
  },
  data: () => {
    return {};
  },
  methods: {},
};
</script>
