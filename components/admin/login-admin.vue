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
                'is-danger': errors.has('Email'),
              }"
              :message="errors.first('Email')"
              label="Email"
            >
              <b-input
                v-model="email"
                v-validate="'required|email'"
                :name="'Email'"
                type="text"
                :has-counter="false"
                placeholder="Ingresa tu numero de indentificación"
              >
              </b-input>
            </b-field>
            <b-field
              :type="{
                'is-danger': errors.has('Password'),
              }"
              :message="errors.first('Password')"
              label="Password"
            >
              <b-input
                v-model="password"
                v-validate="'required'"
                :name="'Password'"
                type="password"
                password-reveal
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
      email: null,
      password: null,
    }
  },
  methods: {
    async ingresar() {
      if (await this.validate()) {
        const { data: result } = await this.$api.consulta.usuario.get({
          email: this.email,
          passWord: this.password,
        })

        if (!result.exitoso) {
          this.$toast(null, result.mensaje, null, 'is-danger')
        } else {
          this.$loginAdmin({
            idUser: result.data.eu_id,
            emailUser: result.data.eu_email,
          })
          this.$router.push({ name: 'Admin' })
        }
      }
    },
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
