<script>
export default {
  render: function(createElement) {
    return createElement("h1", {
      domProps: {
        innerHTML: "hello, world",
      },
      on: {
        click: this.$listeners.click,
      },
    });
  },
};
</script>
