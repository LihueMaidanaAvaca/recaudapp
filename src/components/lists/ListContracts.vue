<template>
  <div>
    <v-pagination
      v-if="totalPages > 1"
      v-model="currentPage"
      :length="totalPages"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
    />
    <v-list>
      <v-list-item v-for="contract in paginatedContracts" :key="contract.id" @click="redirectToResume(contract)">
        <v-card class="mb-3" color="primary" >
          <v-row align-item="center">
            <v-col cols="9">
              <v-card-title>{{ contract.title }}</v-card-title>
              <v-card-subtitle>{{ contract.type }}</v-card-subtitle>
              <v-card-text>{{ contract.address }}</v-card-text>
            <v-col cols="12" class="text-right">
              <v-card-subtitle>{{ contract.count }}</v-card-subtitle>
            </v-col>
            </v-col>
          </v-row>
        </v-card>
      </v-list-item>
    </v-list>
    
  </div>
</template>

<script>
import mockData from '@/components/lists/mockData.json';

export default {
  name: 'ListContract',
  methods: {
    redirectToResume(contract) {
      console.log("id", contract.id)
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
