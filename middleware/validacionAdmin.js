export default function ({ app }) {
  if (process.browser) {
    const user = app.$storage.getCookie('idUser')
    const emailUser = app.$storage.getCookie('emailUser')
    if (!user && !emailUser) {
      app.router.push({ name: 'Admin-loginUsuario' })
    }
  }
}
