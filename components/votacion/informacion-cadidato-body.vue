<template>
  <section>
    <section class="hero is-info">
      <div class="hero-body columns">
        <div>
          <figure class="image is-128x128">
            <img :src="candidato.foto" alt="Image" />
          </figure>
        </div>
        <div class="column">
          <h1 class="title">{{ getNombreCompleto }}</h1>
          <h2 class="subtitle">
            {{ candidato.partido }} | {{ candidato.Aliaspartido }}
          </h2>
          <h2 class="subtitle">{{ candidato.descripcionCargo }}</h2>
        </div>
      </div>
    </section>
    <section>
      <div class="mt-5">
        <h1 class="title">Perfil</h1>
        <p class="has-text-justified">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          voluptatum aliquid esse voluptate impedit officiis vitae. Soluta
          accusamus esse optio, earum, asperiores at repellat veritatis iusto
          culpa quia, commodi totam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius, dolorum, hic voluptate sed architecto dolorem
          harum minus soluta atque illo nesciunt numquam rerum? Nesciunt optio
          culpa suscipit eligendi. Temporibus, quia! Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          explicabo harum, atque rerum totam repudiandae ut unde perspiciatis
          eum similique ea dolor corporis eveniet? Nesciunt tenetur aut omnis
          maxime perspiciatis? consectetur adipisicing elit. Quisquam,
          voluptatum
        </p>
        <br />
        <div class="columns">
          <div class="column">
            <h1 class="subtitle">Misión</h1>
            <p class="has-text-justified">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              unde quidem ratione ducimus, expedita sed placeat recusandae iste
              eligendi dolore alias assumenda similique aspernatur nesciunt,
              ullam nobis, nostrum illum magni? Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Alias cumque,
              vero officiis facere aspernatur ad? Esse numquam voluptatem autem
              quam asperiores, optio et perspiciatis maiores ratione eius, vero
              culpa fugit. consectetur adipisicing elit. Quisquam, voluptatum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              error sequi recusandae harum, sint laboriosam? Ducimus dolorum,
              vero dolorem ab totam fuga veritatis facilis sint eum esse dolores
              cum repellendus!
            </p>
          </div>
          <div class="column">
            <h1 class="subtitle">Visión</h1>
            <p class="has-text-justified">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              unde quidem ratione ducimus, expedita sed placeat recusandae iste
              eligendi dolore alias assumenda similique aspernatur nesciunt,
              ullam nobis, nostrum illum magni? Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Alias cumque,
              vero officiis facere aspernatur ad? Esse numquam voluptatem autem
              quam asperiores, optio et perspiciatis maiores ratione eius, vero
              culpa fugit. consectetur adipisicing elit. Quisquam, voluptatum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              error sequi recusandae harum, sint laboriosam? Ducimus dolorum,
              vero dolorem ab totam fuga veritatis facilis sint eum esse dolores
              cum repellendus!
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      candidato: {
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
      },
    }
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
  },
  created() {
    this.candidato = this.$route.params.candidato
  },
  methods: {},
}
</script>

<style></style>
