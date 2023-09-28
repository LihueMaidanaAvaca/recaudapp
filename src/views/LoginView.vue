<template>
  <v-container>
    <v-row justify="center" :align="'end'" class="mt-6">
      <v-col cols="12" sm="8" md="6">
        <div class="login-image-container text-center">
          <img
            class="login-image"
            src="@/assets/logoaabe2.png"
            alt="Login Image"
          />
        </div>
        <v-form ref="loginForm" class="login-form" @submit.prevent="handleSubmit">
          <v-text-field
            v-model="email"
            label="Email de usuario"
            required
            :rules="[v => !!v || 'El email es requerido', v => /.+@.+\..+/.test(v) || 'El email debe ser válido']"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            :rules="[v => !!v || 'La contraseña es requerida']"
          ></v-text-field>
          <v-btn type="submit" color="cyan darken-1">Login</v-btn>
        </v-form>
        <router-link to="home" class="link" style="color: #00bcd4">
          Recuperar contraseña
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
// import axios from 'axios'

export default {
  data() {
    return {
      email: "@bienesdelestado.gob.ar",
      password: "",
    };
  },
  computed: {
    hasAuthToken() {
      return localStorage.getItem("authToken") !== null;
    },
  },
  created() {
    if (this.hasAuthToken) {
      this.redirectToHome();
    }
  },
  methods: {
    async handleSubmit() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);

      try {
        // Simular una solicitud de autenticación al servidor (reemplaza con tu lógica real)
        // await axios.post('/api/login', {
        //   cuil: this.cuil,
        //   password: this.password,
        // });

        // Supongamos que el servidor devuelve un token o algún indicador de autenticación exitosa
        // const isAuthenticated = response.data.isAuthenticated;
        if (this.$refs.loginForm.validate()) {
        const isAuthenticated = "password" === this.password;
        
        if (isAuthenticated) {
          // Simulación de un token (reemplaza con el token real del servidor)
          const authToken = "mi-token-secreto";

          // Guardar el token en el localStorage
          localStorage.setItem("authToken", authToken);

          // Redirigir a la página de inicio después de un inicio de sesión exitoso
          this.$router.push("/home");
        } else {
          // Manejar caso de autenticación fallida si es necesario
          // Por ejemplo, mostrar un mensaje de error al usuario
        }
      }
     } catch (error) {
        console.error("Error de autenticación:", error);
        // Manejar errores de autenticación si es necesario
      }
    },
    redirectToHome() {
      this.$router.push("/home"); // Cambia '/home' por tu ruta de inicio
    },
  },
};
</script>


<style>
.login-form {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-top: 30vh; /* Agrega margen superior para separar el formulario del logo */
}

.login-image {
  max-width: 100%;
  border-radius: 8px;

  opacity: 0; /* Inicialmente, el logo estará completamente transparente */
  animation: fadeLogo 1.5s forwards; /* Nombre de la animación y duración */
}

.link {
  color: primary;
  text-decoration: underline;
}

.link:hover {
  /* Cambia el color al hacer hover (opcional) */
  color: primary; /* Puedes cambiarlo a otro color si lo deseas */
}

@keyframes fadeLogo {
  0% {
    opacity: 0; 
  }
  100% {
    opacity: 1; 
  }
}
</style>