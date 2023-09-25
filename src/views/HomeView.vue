<template>
  <div>
    <app-bar></app-bar>
    <v-row justify="center" class="mt-6">
      <v-col cols="12" sm="8" md="6">
        <v-sheet elevation="0" class="pa-4">
          <h2 class="headline text-center sticky-header">
            Seleccione el contrato que desee abonar
          </h2>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <list-contract />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ListContract from '@/components/lists/ListContracts.vue';
import AppBar from '@/components/AppBar.vue';

export default {
  components: {
    ListContract,
    AppBar
  }
}
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

