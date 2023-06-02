export default ({ app }, inject) => {
  inject('loginVotante', (dpi) => {
    app.$storage.setCookie('dpi', dpi)
    app.$storage.setCookie('loginType', 'votante')
  })
  inject('loginAdmin', (user) => {
    app.$storage.setCookie('idUser', user.idUser)
    app.$storage.setCookie('emailUser', user.emailUser)
    app.$storage.setCookie('loginType', 'admin')
  })
  inject('getPersona', () => {
    return app.$storage.getCookie('dpi')
  })
  inject('getUsuario', () => {
    const idUser = app.$storage.getCookie('idUser')
    const emailUser = app.$storage.getCookie('emailUser')
    return { id: idUser, email: emailUser }
  })
  inject('validateLogin', () => {
    const idUser = app.$storage.getCookie('idUser')
    const emailUser = app.$storage.getCookie('emailUser')
    const dpi = app.$storage.getCookie('dpi')
    if ((idUser && emailUser) || dpi) {
      return true
    } else {
      return false
    }
  })
  inject('logOut', () => {
    app.$storage.removeCookie('dpi')
    app.$storage.removeCookie('loginType')
    app.$storage.removeCookie('idUser')
    app.$storage.removeCookie('emailUser')
    app.router.push({ name: 'index' })
  })
}
