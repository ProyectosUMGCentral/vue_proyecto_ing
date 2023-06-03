<template>
  <section class="section">
    <votacion-persona-body></votacion-persona-body>
  </section>
</template>

<script>
import votacionPersonaBody from '@/components/votacion/votacion-persona-body.vue'

export default {
  components: {
    votacionPersonaBody,
  },
  middleware: 'validacionVotante',
}
</script>

<style></style>
