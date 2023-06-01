export default ({ app }, inject) => {
  inject('loginVotante', (dpi) => {
    localStorage.setItem('votante', dpi)
    localStorage.setItem('loginType', 'votante')
  })
  inject('getPersona', () => {
    return localStorage.getItem('votante')
  })
  inject('logOut', () => {
    localStorage.clear()
    this.$router.push('/')
  })
}
