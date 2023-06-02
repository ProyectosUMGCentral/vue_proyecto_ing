<template>
  <section>
    <section>
      <header-page
        :show-log-out="true"
        title="Adminitracion centro de votación"
        sub-title="Proyecto ingenieria en sistemas"
        type="is-info"
      />
    </section>
    <section>
      <div class="columns is-multiline is-centered">
        <div class="column">
          <card title="Apertura" icon="lock-open-check-outline">
            Aperturas de centros de votaciones
          </card>
        </div>
        <div class="column">
          <card title="Cierre" icon="lock-check-outline">
            Cierre de centros de votaciones
          </card>
        </div>
        <div class="column">
          <card title="Consulta" icon="eye"> Consulta de resultados </card>
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
}
</script>
