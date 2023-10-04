<template>
  <v-app>
    <v-app-bar color="primary" height="64" fixed v-if="isUserAuthenticated">
    <v-avatar color="teal" size="48">
      <span class="white--text text-h5">T</span>
    </v-avatar>

    <v-spacer></v-spacer>
    <v-switch
      v-model="isDarkMode"
      class="mt-5"
      color="#0b3f61"
      :append-icon="isDarkMode ? 'mdi-weather-night' : 'mdi-weather-sunny'"
    ></v-switch>
    <div>
      <v-tabs background-color="primary" show-arrows mobile-breakpoint="xs">
        <v-tab @click="loadPayments">Pagos</v-tab>
        <v-tab link to="/home">Home</v-tab>
        <v-tab @click="showLogoutConfirmationDialog">Salir</v-tab>
      </v-tabs>
    </div>

    <!-- Modal de confirmación para cerrar sesión -->
    <v-dialog v-model="logoutConfirmationDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">¿Quieres cerrar sesión?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="logout">Sí, Cerrar Sesión</v-btn>
          <v-btn color="error" @click="closeLogoutConfirmationDialog"
            >Cancelar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import AppBarVue from "./components/AppBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    // AppBarVue

  },

  data() {
    return {
      userName: "Telefonica Argentina S.A.",
      logoutConfirmationDialog: false,
    };
  },

  computed: {
    isUserAuthenticated() {
      return !!localStorage.getItem("authToken");
    },
    isDarkMode: {
      get() {
        return this.$vuetify.theme.dark;
      },
      set(value: boolean) {
        this.$vuetify.theme.dark = value;
        // Guardar el estado del tema en localStorage
        localStorage.setItem("theme", value ? "dark" : "light");
        console.log("guardar tema");
      },
    },
  },

  watch: {
    $route() {
      this.checkAuthentication();
    },
  },

  mounted() {
    // Verificar la autenticación cuando el componente se ha montado
    this.checkAuthentication();
  },

  methods: {
    checkAuthentication() {
      const authToken = localStorage.getItem("authToken");
      console.log("authToken:", !!authToken);
      this.isUserAuthenticated = !!authToken;
    },
    loadPayments() {
      // Verificar si los pagos ya están guardados en el almacenamiento local
      const storedPayments = localStorage.getItem("payments");
      if (!storedPayments) {
        // Si no están guardados, crea un ejemplo de array de pagos (reemplaza esto con tus datos reales)
        const examplePayments = [
          {
            fecha: "2023-08-15",
            tipo: "VEP",
            importe: "120000.00",
            state: "Pendiente",
          },
          {
            fecha: "2023-08-14",
            tipo: "Boleta",
            importe: "2500000.00",
            state: "Registrado",
          },
          {
            fecha: "2023-08-13",
            tipo: "VEP",
            importe: "180000.50",
            state: "Pendiente",
          },
        ];

        // Guardar el array de pagos en el almacenamiento local
        localStorage.setItem("payments", JSON.stringify(examplePayments));
      }

      // Ahora puedes redirigir a la página de historial de pagos
      this.$router.push({ name: "HistoryView" });
    },
    showLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = true;
    },
    closeLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = false;
    },
    logout() {
      console.log(this.isUserAuthenticated, "estado del token");
      localStorage.removeItem("authToken");
      this.$router.push({ name: "LoginView" });
      window.location.reload();
    },
  },

  

  
});
</script>
