export default {
  methods: {
    async validate() {
      let exito = false
      await this.$validator.validateAll().then((result) => {
        if (!result)
          this.$toast(null, 'Hay errores en el formulario', null, 'is-danger')
        exito = result
      })
      return exito
    },
  },
}
