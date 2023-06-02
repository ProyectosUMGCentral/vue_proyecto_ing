<template>
  <section>
    <section>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <slot name="header" />
        </header>
        <section class="modal-card-body">
          <slot name="body" />
        </section>
        <footer class="modal-card-foot">
          <slot name="footer" />
        </footer>
      </div>
    </section>
  </section>
</template>

<script>
export default {}
</script>
<style></style>
