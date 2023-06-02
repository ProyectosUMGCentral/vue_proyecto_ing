<template>
  <section>
    <section>
      <div class="columns is-multiline">
        <div
          v-for="(item, index) in candidatos"
          :key="index"
          class="column is-4-fullhd is-4-desktop is-6-tablet is-12-mobile"
        >
          <card-candidatos></card-candidatos>
        </div>
      </div>
    </section>
    <section>
      <b-loading v-model="cargando"> </b-loading>
    </section>
  </section>
</template>

<script>
import cardCandidatos from '@/components/candidatos/cardCandidatos.vue'
export default {
  components: {
    cardCandidatos,
  },
  props: {
    tipoConsulta: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      candidatos: [],
      cargando: false,
    }
  },
  computed: {
    payloadCandidatos() {
      const result = {
        cargo: null,
        municipio: null,
        departamento: null,
      }
      return result
    },
  },
  async created() {
    await this.getCandidatos()
  },

  methods: {
    async getCandidatos() {
      const { data: result } = await this.$api.consulta.candidatos.post(
        this.payloadCandidatos
      )
      if (!result.exitoso) {
        this.$toast(null, result.mensaje, null, 'is-danger')
      } else {
        this.candidatos = result.data
      }
    },
  },
}
</script>
