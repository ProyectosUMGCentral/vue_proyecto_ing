<template>
  <div>
    <section>
      <div>
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'votacion' },
        },
      ],
    }
  },
  computed: {
    viewLayOut() {
      const user = this.$getPersona()
      if (user) return true
      else return false
    },
  },
  methods: {
    logout() {
      this.viewLayOut = false
      this.$logOut()
    },
  },
}
</script>
