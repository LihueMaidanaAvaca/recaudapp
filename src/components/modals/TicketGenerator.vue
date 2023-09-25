<template>
  <v-dialog max-width="500">
    <v-menu
      ref="menu"
      :close-on-content-click="false"
      transition="scale-transition"
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
        @change="save"
      ></v-date-picker>
    </v-menu>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
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
  methods: {
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
