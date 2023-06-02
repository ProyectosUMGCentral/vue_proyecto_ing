const mensajeErrorHttp = (codigo) => {
  const resultado = {
    mensaje: '',
    exitoso: false,
  }
  switch (codigo) {
    case 201:
      resultado.mensaje = 'El recurso fue creado con éxito!'
      resultado.exitoso = true
      break
    case 400:
      resultado.mensaje =
        'La llamada al servidor no es válida. Revise la información a procesar.'
      break
    case 401:
      resultado.mensaje = 'Su sesión ha expirado.'
      break
    case 404:
      resultado.mensaje = 'El recurso solicitado no existe.'
      break
    case 405:
      resultado.mensaje =
        'La acción solicitada es inválida. Revise la información a procesar.'
      break
    case 409:
      resultado.mensaje = 'El recurso solicitado ya existe.'
      break
    case 500:
      resultado.mensaje =
        'Ocurrió un error en el procesamiento remoto, revise el detalle del mensaje.'
      break
    default:
      resultado.mensaje = 'Ocurrió un error no identificado.'
      break
  }
  return resultado
}
const obtenerInnerException = (ex) => {
  if (!ex) return ''
  let mensaje = null
  if (ex.errors) mensaje = ex.errors
  if (ex.Message) mensaje = ex.Message
  if (ex.mensaje) mensaje = ex.mensaje
  if (ex.ExceptionMessage) mensaje = ex.ExceptionMessage
  if (ex.InnerException) mensaje = obtenerInnerException(ex.InnerException)

  return mensaje
}

const parseError = (err) => {
  let response
  if (err && err.response) {
    const errorInterno = mensajeErrorHttp(err.response.status)
    let mensaje = null
    if (err.response.data) mensaje = obtenerInnerException(err.response.data)
    else mensaje = errorInterno.mensaje

    response = {
      data: {
        mensaje,
        exitoso: errorInterno.exitoso,
        statusCode: err.response.status,
      },
      http: err.response.status,
    }
  } else {
    response = {
      data: {
        statusCode: 401,
        mensaje: 'No puede establecer una conexión con el servidor.',
        exitoso: false,
      },
    }
  }
  return response
}

const apiRepository = ($axios) => (resource) => ({
  async get(params = {}, path = '') {
    let options = {}
    let uri = `${resource}`
    if (typeof params === 'object' && params !== null) {
      options = { params }
      if (path.length > 0) uri = `${uri}/${path}`
    } else uri = `${uri}/${params}`
    try {
      const data = await $axios.$get(uri, options)
      return { data: { ...data, exitoso: true }, http: 200, exitoso: true }
    } catch (err) {
      return parseError(err)
    }
  },

  async post(payload) {
    try {
      const data = await $axios.$post(`${resource}`, payload)
      return { data: { ...data, exitoso: true }, http: 200, exitoso: true }
    } catch (err) {
      return parseError(err)
    }
  },

  async put(path, payload) {
    try {
      const data = await $axios.$put(`${resource}/${path}`, payload)
      return { data: { ...data, exitoso: true }, http: 200, exitoso: true }
    } catch (err) {
      return parseError(err)
    }
  },
})

export default (ctx, inject) => {
  const axiosApi = apiRepository(ctx.$axios)
  const recursos = {
    consulta: {
      ciudadano: axiosApi('consultas/ciudadano'),
    },
  }
  inject('api', recursos)
}
