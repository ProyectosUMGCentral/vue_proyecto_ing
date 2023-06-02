<template>
  <section class="section">
    <consulta-body></consulta-body>
  </section>
</template>

<script>
import consultaBody from '@/components/votacion/consulta-body.vue'
export default {
  components: {
    consultaBody,
  },
  middleware: 'validacionVotante',
}
</script>

<style></style>
