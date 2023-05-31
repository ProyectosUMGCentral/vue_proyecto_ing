<template>
  <section>
    <section>
      <panel-animado>
        <template #header>
          <div>
            <p class="modal-card-title">Ingreso</p>
          </div>
        </template>
        <template #body>
          <div>
            <b-field
              :type="{
                'is-danger': errors.has('DPI'),
              }"
              :message="errors.first('DPI')"
              label="DPI"
            >
              <b-input
                v-model="dpi"
                v-validate="'required|dpi'"
                :name="'DPI'"
                type="text"
                maxlength="13"
                :has-counter="false"
                placeholder="Ingresa tu numero de indentificación"
              >
              </b-input>
            </b-field>
          </div>
        </template>
        <template #footer>
          <div>
            <b-tooltip type="is-info" label="Regresar">
              <b-button icon-left="arrow-left" @click="back" />
            </b-tooltip>
            <b-button label="Ingresar" type="is-info" @click="ingresar" />
          </div>
        </template>
      </panel-animado>
    </section>
  </section>
</template>

<script>
import panelAnimado from '@/components/panelAnimado.vue'
import genericValidation from '@/mixins/genericValidation.js'
export default {
  components: {
    panelAnimado,
  },
  mixins: [genericValidation],
  data() {
    return {
      dpi: null,
    }
  },
  methods: {
    async ingresar() {
      await this.validate()
    },
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
