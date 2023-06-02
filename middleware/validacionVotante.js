export default function ({ app }) {
  if (process.browser) {
    const user = app.$storage.getCookie('dpi')
    if (!user) {
      app.router.push({ name: 'votacion-loginUsuario' })
    }
  }
}
