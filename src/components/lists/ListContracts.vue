<template>
  <div>
    <v-pagination
      v-if="totalPages > 1"
      v-model="currentPage"
      :length="totalPages"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
    />
    <v-row>
      <v-col v-for="contract in paginatedContracts" :key="contract.id" class="col-12">
        <v-card color="primary" @click="redirectToResume(contract)">
          <v-card-title>{{ contract.title }}</v-card-title>
          <v-card-subtitle>{{ contract.type }}</v-card-subtitle>
          <v-card-text>{{ contract.address }}</v-card-text>
          <v-card-subtitle>{{ contract.count }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import mockData from '@/components/lists/mockData.json';

export default {
  name: 'ListContract',
  methods: {
    redirectToResume(contract) {
      this.$router.push({ name: 'PaymentSelector', params: { id: contract.id } });
      
    },
  },
  data() {
    return {
      contracts: mockData,
      itemsPerPage: 10, // Cantidad de contratos por página
      currentPage: 1, // Página actual
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.contracts.length / this.itemsPerPage);
    },
    paginatedContracts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.contracts.slice(start, end);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos de esta página, si es necesario */
</style>
