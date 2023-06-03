<template>
  <section class="section">
    <section>
      <header-page
        :show-log-out="true"
        title="Centro de votación"
        sub-title="Perfiles de candidatos"
        type="is-info"
      />
    </section>
    <br />
    <section>
      <cuadriculas-candidatos
        :selected-item.sync="selectedItem"
      ></cuadriculas-candidatos>
    </section>
  </section>
</template>

<script>
import cuadriculasCandidatos from '@/components/candidatos/cuadriculas-candidatos.vue'
export default {
  components: {
    cuadriculasCandidatos,
  },
  data() {
    return {
      selectedItem: null,
    }
  },
  watch: {
    selectedItem() {
      if (this.selectedItem) {
        this.$router.push({
          name: 'votacion-informacionCandidato',
          params: { candidato: this.selectedItem },
        })
      }
    },
  },
}
</script>
