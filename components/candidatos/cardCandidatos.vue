<template>
  <section @click="updateSelection">
    <div :class="selectedClass">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              :src="
                candidato.foto ??
                'https://bulma.io/images/placeholders/128x128.png'
              "
              alt="Image"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ getNombreCompleto }}</strong>
              <small>{{ candidato.Aliaspartido }}</small>
              <small>{{ candidato.correo }}</small>
              <br />
              {{ candidato.descripcionCargo }}
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item" aria-label="reply">
                <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    candidato: {
      type: Object,
      default: () => {
        return {
          nombre1: 'Juan',
          nombre2: null,
          nombre3: null,
          apellido1: 'Perez',
          apellido2: null,
          apellido3: null,
          partido: 'Partido de la U',
          Aliaspartido: 'U',
          cargo: null,
          descripcionCargo:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!',
          departamento: null,
          municipio: null,
          foto: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
          correo: 'example@mail.com',
        }
      },
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    getNombreCompleto() {
      const nameConcat = [
        this.candidato.nombre1,
        this.candidato.nombre2,
        this.candidato.nombre3,
        this.candidato.apellido1,
        this.candidato.apellido2,
        this.candidato.apellido3,
      ]
      return nameConcat.filter((item) => item).join(' ')
    },
    selectedClass() {
      return this.selected ? 'box has-background-grey-lighter' : 'box'
    },
  },
  created() {},
  methods: {
    updateSelection() {
      this.$emit('clickCard')
    },
  },
}
</script>

<style></style>
