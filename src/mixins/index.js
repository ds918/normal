import Vue from 'vue';
Vue.mixin({
  data: () => ({
    author: 'dongsen'
  }),
  methods: {
    $V(px) {
      return `${px / parseInt(process.env.VUE_APP_BASESIZE)}rem`
    }
  }
})