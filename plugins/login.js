export default ({ app }, inject) => {
  inject('loginVotante', (dpi) => {
    app.$storage.setCookie('dpi', dpi)
    app.$storage.setCookie('loginType', 'votante')
  })
  inject('getPersona', () => {
    return app.$storage.getCookie('dpi')
  })
  inject('logOut', () => {
    app.$storage.removeCookie('dpi')
    app.$storage.removeCookie('loginType')
    app.router.push({ name: 'index' })
  })
}
