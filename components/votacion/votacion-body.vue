<template>
  <section>
    <section>
      <header-page
        :show-log-out="true"
        title="Centro de votación"
        sub-title="Proyecto ingenieria en sistemas"
        type="is-info"
      />
    </section>
    <section>
      <div class="columns is-multiline is-centered">
        <div class="column" @click="votacion">
          <card title="Emisión" icon="checkbox-marked-outline">
            Emision de voto
          </card>
        </div>
        <div class="column" @click="consulta">
          <card title="Consulta" icon="eye"> Consulta de cantidatos </card>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Card from '~/components/Card'
import headerPage from '@/components/header-page.vue'
export default {
  components: {
    Card,
    headerPage,
  },
  methods: {
    consulta() {
      this.$router.push({ name: 'votacion-consulta' })
    },
    votacion() {
      this.$router.push({ name: 'Actas-Acta_inicio_persona' })
    },
  },
}
</script>
