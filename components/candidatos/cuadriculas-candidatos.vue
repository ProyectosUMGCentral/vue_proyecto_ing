<template>
  <section>
    <section>
      <div class="columns is-multiline">
        <div
          v-for="(item, index) in candidatos"
          :key="index"
          class="column is-4-fullhd is-4-desktop is-6-tablet is-12-mobile"
          @click="itemSelect(item)"
        >
          <card-candidatos
            :candidato="item"
            :selected="isSelected(item)"
          ></card-candidatos>
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
    selectedItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      candidatos: [],
      cargando: false,
      selected: {},
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
    aleatoryNumberPhoto() {
      return Math.floor(Math.random() * 50) + 1
    },
    itemSelect(item) {
      this.selected = item
      this.updateSelectedItem()
    },
    isSelected(item) {
      return this.selected === item
    },
    updateSelectedItem() {
      this.$emit('update:selectedItem', this.selected)
    },
    async getCandidatos() {
      const { data: result } = await this.$api.consulta.candidatos.post(
        this.payloadCandidatos
      )
      if (!result.exitoso) {
        this.$toast(null, result.mensaje, null, 'is-danger')
      } else {
        this.candidatos = result.data.map((item) => {
          return {
            idCandidato: item.ec_id,
            nombre1: item.ec_nombre1,
            nombre2: item.ec_nombre2,
            nombre3: item.ec_nombre3,
            apellido1: item.ec_apellido1,
            apellido2: item.ec_apellido2,
            apellido3: item.ec_apellido3,
            partido: item.epp_nombre,
            Aliaspartido: item.epp_abreviatura,
            cargo: item.eca_nombre_Cargo,
            descripcionCargo: item.eca_descripcion,
            departamento: item.ee_nombre,
            municipio: item.em_nombre,
            correo: item.ec_correo_electronico,
            foto: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            selected: false,
          }
        })
      }
    },
  },
}
</script>
