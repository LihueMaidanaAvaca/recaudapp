<template>
  <div>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card elevation="12" class="response-card">
            <v-card-text class="response-message">
              Su VEP se ha generado correctamente. Podrá verlo desde su Home Banking con el número VEP
              {{ vepnumber }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'BoletaResponse',
  components: {  },
  props: { boletaLink: String, vepnumber: String } // Make sure to pass vepnumber as a prop
}
</script>

<style scoped>
.response-card {
  text-align: center;
  padding: 24px;
  border-radius: 12px; /* Redondear los bordes */
  margin-top: 30vh;
}

.response-message {
  font-size: 3vh; /* Adjust the font size as needed */
  font-weight: bold;
  color: #4aacf2; /* Color azul */
  text-align: center; /* Center the text horizontally */
  line-height: 1.1; /* Add space between lines */
}

.link {
  color: #1976d2; /* Color azul */
  text-decoration: none;
  font-weight: bold;
}
</style>
