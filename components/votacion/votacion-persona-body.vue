<template>
  <section class="section">
    <section>
      <header-page
        :show-log-out="true"
        title="Centro de votación"
        sub-title="Perfiles de candidatos para elecciones"
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
      this.$buefy.dialog.confirm({
        message: '¿Estas seguro de emitir el voto?',
        cancelText: 'Cancelar',
        confirmText: 'Aceptar',
        type: 'is-success',
        onConfirm: () => this.votacion(),
      })
    },
  },
  methods: {
    async votacion() {
      if (this.selectedItem) {
        const payLoad = {
          num_identificacion: this.$getPersona(),
          centro_votacion: 1,
          terminal_voto: 1,
          candidato: this.selectedItem.idCandidato,
          eleccion: 1,
          autoridad_mesa: 1,
        }
        const { data: result } = await this.$api.votacion.emision.post(payLoad)
        if (!result.exitoso) {
          this.$toast(null, result.mensaje, null, 'is-danger')
        } else {
          this.$toast(
            null,
            'El voto a sido emitido exitosamente',
            null,
            'is-success'
          )
          this.$router.push({ name: 'Actas-Acta_final_persona' })
        }
      }
    },
  },
}
</script>
