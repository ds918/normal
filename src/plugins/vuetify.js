import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import '@/styles/index.scss';

Vue.use(Vuetify);

import zhHans from 'vuetify/es5/locale/zh-Hans'

export default new Vuetify({
  breakpoint: {
    scrollBarWidth: 300
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans',
  },

});
