<template>
  <section class="section">
    <section>
      <header-page
        :show-log-out="true"
        title="Centro de votación"
        sub-title="Perdiles de candidatos"
        type="is-info"
      />
    </section>
    <br />
    <section>
      <cuadriculas-candidatos></cuadriculas-candidatos>
    </section>
  </section>
</template>

<script>
import cuadriculasCandidatos from '@/components/candidatos/cuadriculas-candidatos.vue'
export default {
  components: {
    cuadriculasCandidatos,
  },
}
</script>

<style></style>
