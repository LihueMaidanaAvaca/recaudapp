<template>
  <v-container fluid>
    <v-card class="mb-3" elevation="3">
      <v-card-title>Resumen</v-card-title>
      <v-row>
        <v-col cols="4">
          <v-card-subtitle>Deuda: {{ contract.deuda }}</v-card-subtitle>
          <v-card-subtitle>Intereses: {{ contract.intereses }}</v-card-subtitle>
          <v-card-subtitle>Total: {{ contract.total }}</v-card-subtitle>
        </v-col>
        <v-col cols="8">
          <v-card-subtitle
            >Próximo Vencimiento:
            {{ contract.proximoVencimiento }}</v-card-subtitle
          >
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mb-3" elevation="3">
      <v-card-title>Mensaje fijo</v-card-title>
      <v-card-text>{{ mensaje }}</v-card-text>
    </v-card>

    <!-- ///////// -->
    <v-card class="mb-3" elevation="3">
      <v-card-title>Seleccione método de pago</v-card-title>
      <v-row>
        <v-col cols="12" md="8">
          <!-- Contenedor de los mensajes -->
          <!-- Contenido de los panels -->
          <v-card v-if="panels[0].isSelected" class="mb-3" elevation="3">
            <v-card-title>Pago Independiente</v-card-title>

            <v-card-text>
              Contenido del método de pago: Pago Independiente.
              <v-btn color="primary" @click="continueToGenerator">
                Continuar
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <!-- Contenedor de los checkboxes -->
          <div class="d-flex flex-column">
            <v-checkbox
              v-for="(panel, index) in panels"
              :key="index"
              v-model="panel.isSelected"
              :label="panel.label"
              @click="handleCheckboxClick(index)"
            ></v-checkbox>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-dialog v-model="showForm" max-width="500">
      <v-card>
      <v-col> </v-col>
      <v-form v-model="valid">
        <v-text-field
        :value="due"
        :rules="dateRules"
        :counter="10"
        label="Fecha aproximada de pago"
        required
        hide-details
        >
      </v-text-field>
      <v-text-field
      v-model="payment"
      :rules="nameRules"
          :counter="10"
          label="Cifra a pagar"
          required
          hide-details
        ></v-text-field>
        <v-switch
          v-model="selectedOption"
          hide-details
          true-value="Boleta"
          false-value="VEP"
          :label="`Pagara con ${selectedOption}`"
          id="vep-switch"
          ></v-switch>
          <v-btn type="submit" block class="mt-2">Generar Ticket</v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
  </template>

<script>
import mockData from "@/components/lists/mockData.json";

export default {
  name: "PaymentSelector",
  // Propiedades, datos, métodos y más aquí
  props: {
    deuda: Number,
    intereses: Number,
    total: Number,
    proximoVencimiento: String,
    mensaje: String,
  },
  components: {},

  data() {
    return {
      selectedDate: null,
      showForm: false,
      selectedOption: "Boleta",
      due: null,
      panels: [
        { label: "Pago Independiente", isSelected: false },
        // { label: "Pago en cuotas fijas", isSelected: false },
        // { label: "Pago en cuotas variables", isSelected: false },
      ],
    };
  },

  computed: {
    contract() {
      const contractId = parseInt(this.$route.params.id, 10);
      console.log("id", contractId);
      return mockData.find((contract) => contract.id === contractId) || {};
    },
  },

  methods: {
    handleDateChange(date) {
      this.selectedDate = date;
      console.log(this.selectedDate, "fecha introducida");
    },
    handleCheckboxClick(selectedIndex) {
      this.panels.forEach((panel, index) => {
        if (index !== selectedIndex) {
          panel.isSelected = false;
        }
      });
    },
    continueToGenerator() {
      this.showForm = true;
    },
  },
};
</script>

<style scoped>
</style>