export default ({ app }, inject) => {
  app.validator.extend(
    'decimal',
    function (value, { decimals = '*', separator = '.' }) {
      if (value === null || value === undefined || value === '') {
        return {
          valid: true,
        }
      }
      if (Number(decimals) === 0) {
        return {
          valid: /^-?\d*$/.test(value),
        }
      }
      const regexPart = decimals === '*' ? '+' : `{${decimals},${decimals}}`
      const regex = new RegExp(
        `^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`
      )

      return {
        valid: regex.test(value),
      }
    }
  )
  app.validator.extend('dpi', {
    validate(value) {
      const cuiValido = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/

      if (!cuiValido.test(value)) return false

      value = value.replace(/\s/, '')
      const departamento = parseInt(value.substring(9, 11), 10)
      const municipio = parseInt(value.substring(11, 13))
      const numero = value.substring(0, 8)
      const verificador = parseInt(value.substring(8, 9))

      const municipios = [
        /* 01 - Guatemala      */ 17, /* 02 - El Progreso    */ 8,
        /* 03 - Sacatepéquez   */ 16, /* 04 - Chimaltenango  */ 16,
        /* 05 - Escuintla      */ 13, /* 06 - Santa Rosa     */ 14,
        /* 07 - Sololá         */ 19, /* 08 - Totonicapán    */ 8,
        /* 09 - Quetzaltenango */ 24, /* 10 - Suchitepéquez  */ 21,
        /* 11 - Retalhuleu     */ 9, /* 12 - San Marcos     */ 30,
        /* 13 - Huehuetenango  */ 32, /* 14 - Quiché         */ 21,
        /* 15 - Baja Verapaz   */ 8, /* 16 - Alta Verapaz   */ 17,
        /* 17 - Petén          */ 14, /* 18 - Izabal         */ 5,
        /* 19 - Zacapa         */ 11, /* 20 - Chiquimula     */ 11,
        /* 21 - Jalapa         */ 7, /* 22 - Jutiapa        */ 17,
      ]

      if (departamento === 0 || municipio === 0) return false

      if (departamento > municipios.length) return false

      if (municipio > municipios[departamento - 1]) return false

      let total = 0

      for (let i = 0; i < numero.length; i++) {
        total += numero[i] * (i + 2)
      }

      const modulo = total % 11

      return modulo === verificador
    },
  })
  app.validator.extend('validaNombre', {
    validate(value) {
      const formatonombre = /^(([a-zA-ZÀ-ÿ\\u00f1\\u00d1]{2,9})+ ?)*$/

      return formatonombre.test(value)
    },
  })
}
