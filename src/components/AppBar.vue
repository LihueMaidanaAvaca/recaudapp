<template>
  <v-app-bar color="primary" height="64" fixed>
    <v-toolbar-title>{{ userName }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <div>
      <v-tabs background-color="primary">
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
          <v-btn color="error" @click="closeLogoutConfirmationDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>
  
<script>
export default {
  name: "AppBar",

  components: {},

  data() {
    return {
      userName: "Telefonica Argentina S.A.",
      logoutConfirmationDialog: false,
    };
  },

  computed: {
    isDark() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },

  methods: {
    loadPayments() {
      console.log('se activo la funcion')
      // Verificar si los pagos ya están guardados en el almacenamiento local
      const storedPayments = localStorage.getItem("payments");
      if (!storedPayments) {
        // Si no están guardados, crea un ejemplo de array de pagos (reemplaza esto con tus datos reales)
        const examplePayments = [
          { fecha: '2023-08-15', tipo: 'VEP', importe: '120000.00', state: "Pendiente" },
          { fecha: '2023-08-14', tipo: 'Boleta', importe: '2500000.00', state: "Registrado" },
          { fecha: '2023-08-13', tipo: 'VEP', importe: '180000.50', state: "Pendiente" },
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
      localStorage.removeItem("authToken");
      this.$router.push({ name: "LoginView" });
    },
  },
};
</script>
  
<style scoped></style>
  