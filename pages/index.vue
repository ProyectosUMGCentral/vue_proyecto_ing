<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column" @click="votacion">
        <card title="Votación" icon="card-account-details-outline">
          Emision de voto
        </card>
      </div>

      <div class="column" @click="admin">
        <card title="Gestion de voto" icon="account-cog">
          Panel administrativo
        </card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'IndexPage',
  components: {
    Card,
  },
  data() {
    return {}
  },
  methods: {
    admin() {
      this.$router.push({ name: 'Admin' })
    },
    votacion() {
      this.$router.push({ name: 'votacion' })
    },
  },
}
</script>
