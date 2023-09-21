<template>
   <div class="payments-banner">
      <span class="payment-date">Fecha</span>
      <span class="payment-type">VEP/Boleta</span>
      <span class="payment-amount">Importe</span>
      <span class="payment-amount">Estado</span>
    </div>
    <ul class="payments-list">
      <li v-for="(pago, index) in pagos" :key="index">
        <span class="payment-date">{{ pago.fecha }}</span>
        <span class="payment-type">{{ pago.tipo }}</span>
        <span class="payment-amount">{{ pago.importe }}</span>
        <span class="payment-state">{{ pago.state }}</span>
      </li>
    </ul>
</template>

<script>

export default {
  name: 'ListPayment',
  data() {
    return {
      pagos: [
        { fecha: '2023-08-15', tipo: 'VEP', importe: '$120.00' , state: "Pendiente"},
        { fecha: '2023-08-14', tipo: 'Boleta', importe: '$250.00', state: "Registrado" },
        { fecha: '2023-08-13', tipo: 'VEP', importe: '$180.50', state: "Pendiente"},
      ],
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.payments-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #cecece;
  border-radius: 8px;
  font-weight: bold;
  color: black
}

.payments-list {
  list-style: none;
  color: black;
  padding: 0;
}

.payments-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #cfcece;
  border-radius: 8px;
}

.payment-date,
.payment-type,
.payment-amount,
.payment-state {
  flex-basis: 25%;
}
</style>