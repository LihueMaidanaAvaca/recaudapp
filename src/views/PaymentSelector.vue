<template>
  <div>
    <app-bar></app-bar>
    <v-container fluid class="col-md-6">
      <v-card class="mb-3" elevation="3">
        <v-card-title>Resumen</v-card-title>
        <v-row>
          <v-col cols="6">
            <v-card-subtitle>Deuda: {{ contract.deuda }}</v-card-subtitle>
            <v-card-subtitle
              >Intereses: {{ contract.intereses }}</v-card-subtitle
            >
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

              <v-card-subtitle>
                Esta opcion le permite ingresar fecha de pago y monto a pagar de
                forma manual.<br />
                <v-btn color="primary" @click="continueToGenerator">
                  Continuar
                </v-btn>
              </v-card-subtitle>
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
          <v-form @submit.prevent="save">
            <v-card-text>
              <!-- Campo de entrada para la fecha -->
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Fecha de Pago"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  :max="maxDate"
                  :min="minDate"
                ></v-date-picker>
              </v-menu>

              <!-- Campo de entrada para el monto -->
              <v-text-field
                v-model="monto"
                label="Monto a Pagar"
                prepend-icon="mdi-currency-usd"
                type="number"
                required
              ></v-text-field>

              <v-card-subtitle
                >Elija Boleta o Vep

                <v-switch
                  v-model="selectedOption"
                  hide-details
                  true-value="VEP"
                  false-value="Boleta"
                  :label="`Pagara con ${selectedOption}`"
                  id="vep-switch"
                ></v-switch>
                <v-radio-group
                  v-model="checkboxOptions"
                  v-if="selectedOption === 'VEP'"
                >
                  <v-radio label="Link" value="Link">
                    <template v-slot:label>
                      <img src="@/assets/linklogo.png" alt="Link Logo" height="50"/>
                    </template>
                  </v-radio>
                  <v-radio label="Banelco" value="Banelco">
                    <template v-slot:label>
                      <img src="@/assets/banelcologo.png" alt="Banelco Logo" height="52"/>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-card-subtitle>
            </v-card-text>

            <v-card-actions>
              <v-btn type="submit" color="primary">Generar Ticket</v-btn>
              <v-btn @click="showForm = false" color="error">Cancelar</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import mockData from "@/components/lists/mockData.json";
import AppBar from "@/components/AppBar.vue";

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
  components: {
    AppBar,
    // TicketGenerator
  },

  data() {
    return {
      monto: null,
      selectedDate: null,
      showForm: false,
      selectedOption: "Boleta",
      due: null,
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      minDate: new Date().toISOString().substr(0, 10), // Fecha actual
      maxDate: this.calculateMaxDate(), // Fecha máxima
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
    calculateMaxDate() {
      const today = new Date();
      const nextMonth = new Date(today);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth.toISOString().substr(0, 10);
    },
    save() {
      // Aquí puedes realizar acciones cuando se selecciona una fecha
      this.dialog = false; // Cierra el modal
    },
  },
};
</script>

<style scoped>
</style>