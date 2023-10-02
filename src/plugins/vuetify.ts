import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors'
// import { VuetifyParsedTheme } from 'vuetify/types/services/theme';

Vue.use(Vuetify);

const savedTheme = localStorage.getItem('theme') || 'light';

export default new Vuetify({
    theme: {
        dark: savedTheme === 'dark',
      themes: {
        light: {
          primary: "#4ad4f2",
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
        },
        dark: {
          primary: "#4ad4f2",
        },
      },
    },
  })
  