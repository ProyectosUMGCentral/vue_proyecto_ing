<template>
  <section class="section">
    <informacion-cadidato></informacion-cadidato>
  </section>
</template>

<script>
import InformacionCadidato from '~/components/votacion/informacion-cadidato-body.vue'
export default {
  components: {
    InformacionCadidato,
  },
  middleware: 'validacionVotante',
}
</script>

<style></style>
