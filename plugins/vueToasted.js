import { ToastProgrammatic as toast } from 'buefy'

export default ({ app }, inject) => {
  inject('toast', (duration, msg, position, type) => {
    toast.open({
      duration: duration || 3000,
      message: msg || 'Hola mundo',
      position: position || 'is-top',
      type: type || 'is-black',
    })
  })
}
