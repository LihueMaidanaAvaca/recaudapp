<template>
  <div>
    <app-bar />
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card elevation="12" class="response-card">
            <v-card-text>
              <div class="response-message">
                <span class="highlighted-text">
                  ¡Su Boleta se ha generado correctamente!
                </span>
              </div>
              <div class="download-link">
                Usted puede
                <a :href="boletaLink" download class="link">
                  descargarla aquí
                </a>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AppBar from "../AppBar.vue";

export default {
  name: "BoletaResponse",
  components: { AppBar },
  props: { boletaLink: String },
};
</script>

<style scoped>
.response-card {
  text-align: center;
  padding: 24px;
  border-radius: 12px; /* Redondear los bordes */
  margin-top: 30vh;
}

.response-message {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.highlighted-text {
  font-size: 3vh;
  font-weight: bold;
  color: #4aacf2; /* Color azul */
  margin-left: 16px;
}

.download-link {
  font-size: 18px;
  margin-top: 16px;
}

.link {
  color: #1976d2; /* Color azul */
  text-decoration: none;
  font-weight: bold;
}
</style>
