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
            <b-field label="Email">
              <b-input
                v-model="email"
                type="text"
                placeholder="Ingresa tu correo electronico"
              >
              </b-input>
            </b-field>
            <b-field label="COntraseña">
              <b-input
                v-model="password"
                type="text"
                placeholder="Ingresa tu contraseña"
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
            <b-button label="Ingresar" type="is-info" />
          </div>
        </template>
      </panel-animado>
    </section>
  </section>
</template>

<script>
import panelAnimado from '@/components/panelAnimado.vue'
export default {
  components: {
    panelAnimado,
  },
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
