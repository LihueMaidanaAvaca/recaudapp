<template>
  <div>
    <v-container>

      <div class="text-center my-4"> <!-- Agrega espacio vertical con my-4 -->
        <h2>Ultimos pagos registrados</h2>
      </div>
      <ListPayment />
    </v-container>
  </div>
</template>
  
<script>
import ListPayment from '@/components/lists/ListPayment.vue';
export default {
  name: 'HistoryView',

  components: {
    ListPayment
  }
}
</script>
  
<style scoped>
.text-center {
  text-align: center;
}
</style>