import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark: true },
    // theme: {
    //     themes: {
    //       light: {
    //         primary: '#36baec',
    //         secondary: '#b0bec5',
    //         accent: '#8c9eff',
    //         error: '#b71c1c',
    //       },
    //     },
    //   },
});
