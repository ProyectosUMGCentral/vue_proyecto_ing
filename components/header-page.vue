<template>
  <section :class="`hero ${type}`">
    <div class="hero-body columns">
      <div class="column">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subTitle }}</h2>
      </div>
      <div
        class="column is-flex is-justify-content-right is-align-content-center"
      >
        <div class="buttons is-right">
          <b-tooltip type="is-danger" label="Cerrar">
            <button
              v-if="showLogOut && userLogin"
              class="button is-danger is-light"
              @click="$logOut()"
            >
              <span class="icon">
                <i class="mdi mdi-logout"></i>
              </span>
            </button>
          </b-tooltip>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'is-info',
    },
    showLogOut: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    userLogin() {
      return this.$validateLogin()
    },
  },
}
</script>
