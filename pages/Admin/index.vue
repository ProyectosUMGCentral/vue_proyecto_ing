<template>
  <section class="section">
    <section>
      <admin-body></admin-body>
    </section>
  </section>
</template>

<script>
import adminBody from '@/components/admin/admin-body.vue'
export default {
  components: {
    adminBody,
  },
  middleware: 'validacionAdmin',
}
</script>

<style></style>
