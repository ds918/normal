<script>
export default {
  functional: true,
  render: function(_, context) {
    return _("h1", {
      domProps: {
        innerHTML: "hello, world"
      },
      class: {
        blue: true
      },
      attrs: {
        id: context.data.attrs.name
      }
    });
  }
};
</script>
