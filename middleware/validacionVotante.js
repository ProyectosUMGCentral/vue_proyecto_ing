export default function ({ app }) {
  if (process.browser) {
    const user = localStorage.getItem('votante')
    if (!user) {
      app.router.push({ name: 'votacion-loginUsuario' })
    }
  }
}
