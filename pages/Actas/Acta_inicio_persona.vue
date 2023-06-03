<template>
  <section class="section">
    <section id="element-to-print">
      <header class="header">
        <h1>
          ACTA DE INICIO DEL PROCESO DE VOTACIÓN PARA LA ELECCIÓN DE LOS
          REPRESENTANTES TITULARES Y SUPLENTES DE LA REPUBLICA DE GUATEMALA
          EMITIDA POR LA ENTIDAD DEL TRIBUNAL SUPREMO ELECTORAL
        </h1>
      </header>
      <div class="primero">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          nulla rerum! Ab, non nemo. Corrupti suscipit architecto quisquam
          laboriosam eligendi voluptatem, impedit vitae accusantium? Quibusdam
          earum eos sequi perspiciatis reprehenderit!
        </p>
      </div>
      <div class="segundo">
        <p>________________________________, Lorem ipsum,</p>
        <p>________________________________, Lorem ipsum,</p>
        <p>________________________________, Lorem ipsum,</p>
        <p>________________________________, Lorem ipsum,</p>
        <p>________________________________, Lorem ipsum,</p>
      </div>
      <div class="tercero">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          nulla rerum! Ab, non nemo. Corrupti suscipit architecto quisquam
          laboriosam eligendi voluptatem, impedit vitae accusantium? Quibusdam
          earum eos sequi perspiciatis reprehenderit!
        </p>
      </div>
      <div class="cuarto">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          nulla rerum! Ab, non nemo. Corrupti suscipit architecto quisquam
          laboriosam eligendi voluptatem, impedit vitae accusantium? Quibusdam
          earum eos sequi perspiciatis reprehenderit!
        </p>
      </div>
      <div class="firmas">
        <div>
          <p>________________</p>
          <p>Nombre y firma</p>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <p>________________</p>
          <p>Nombre y firma</p>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <p>________________</p>
          <p>Nombre y firma</p>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <p>________________</p>
          <p>Nombre y firma</p>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </section>
    <section>
      <b-loading v-model="cargando"></b-loading>
    </section>
  </section>
</template>

<script>
import html2pdf from 'html2pdf.js'
export default {
  data() {
    return {
      cargando: false,
    }
  },
  mounted() {
    this.imprimir()
  },
  methods: {
    imprimir() {
      this.cargando = true
      const identificacion = this.$getPersona()
      const element = document.getElementById('element-to-print')
      const opt = {
        margin: 1,
        filename: `${identificacion}-actaInicio.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      }
      // New Promise-based usage:
      html2pdf().set(opt).from(element).save()
      this.$router.push({ name: 'votacion-votacion-persona' })

      this.cargando = false
    },
  },
}
</script>

<style>
p {
  line-height: 2;
  text-align: justify;
}

body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  min-height: 100%;
}

h1 {
  font-size: 1.4rem;
  text-align: center;
}

.firmas {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .firmas {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
