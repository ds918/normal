<template>
  <v-sheet
    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-5'}`"
    class="px-3 pt-3 pb-3"
  >
    <v-skeleton-loader
      class="mx-auto mb-8"
      max-width="300"
      type="image"
      :loading="show"
    >
      <div>show</div>
    </v-skeleton-loader>
    <v-btn @click="no">123123</v-btn>
  </v-sheet>
</template>

<script>
export default {
  data: () => {
    return {
      show: false,
    };
  },
  methods: {
    no() {
      this.show = !this.show;
    },
  },
  inject: ["theme"],
};
</script>
