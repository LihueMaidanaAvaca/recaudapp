<template>
  <div>
    <v-row justify="center" class="mt-16" v-if="!validCuit">
      <v-col cols="12" sm="8" md="6">
        <v-sheet elevation="0" class="pa-4 " >
          <h2 class="text-center">Ingrese el CUIT</h2>
          <v-form @submit.prevent="acceptCuit">
            <v-text-field v-model="cuit" label="CUIT" :type="'number'"></v-text-field>
            <v-btn @click="acceptCuit" :disabled="!isValidCuit(cuit)">Aceptar</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>

    <div v-if="validCuit">
      <v-row justify="center" class="mt-13">
        <v-col cols="12" sm="8" md="6">
          <v-sheet elevation="0" class="pa-4">
            <h2 class="text-center">Seleccione el contrato que desee abonar</h2>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10" xs="8" sm="10" md="8">
          <list-contract />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ListContract from "@/components/lists/ListContracts.vue";

export default {
  components: {
    ListContract,
  },
  data() {
    return {
      validCuit: false, 
      cuit: "", // Variable para almacenar el CUIT ingresado
    };
  },
  methods: {
    acceptCuit() {
      // Validación del CUIT
      if (this.isValidCuit(this.cuit)) {
        // Lógica para manejar el CUIT ingresado (puedes hacer lo que necesites con this.cuit)
        console.log("CUIT ingresado:", this.cuit);

        localStorage.setItem("validCuit", "true");

        // Actualiza el estado para reflejar que el CUIT es válido
        this.validCuit = true;
      } else {
        // Muestra un mensaje de error o realiza alguna acción cuando el CUIT no es válido
        alert("Por favor, ingrese un CUIT válido.");
      }
    },
    isValidCuit(cuit) {
      // Agrega tu lógica de validación de CUIT aquí
      // Por ejemplo, podrías usar una expresión regular para verificar el formato correcto
      const cuitRegex = /^\d{11}$/;
      return cuitRegex.test(cuit);
    },
  },
  created() {
    // Verifica si el token ya está presente al cargar el componente
    this.validCuit = localStorage.getItem("validCuit") === "true";
  },
};
</script>
    

<style scoped>
@media screen and (min-width: 1200px) {
  .mt-6 {
    margin-top: 80px;
  }

  .headline {
    font-size: 24px;
  }

  .sticky-header {
    position: sticky;
    top: 80px;
    padding: 10px 0;
    z-index: 99; /* Ajusta el valor de z-index */
  }

  .v-col {
    padding: 0 30px;
  }
}
</style>

