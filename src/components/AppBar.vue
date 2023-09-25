<template>
  <v-app-bar color="primary" height="64">
    <v-toolbar-title >{{ userName }}</v-toolbar-title>
    
    <v-spacer></v-spacer>
    <div >
        <v-tabs   background-color="primary">
            <v-tab link to="/history">Pagos</v-tab>
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
    showLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = true;
    },
    closeLogoutConfirmationDialog() {
      this.logoutConfirmationDialog = false;
    },
    logout() {
      localStorage.removeItem("authToken");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
  
<style scoped>
</style>
  