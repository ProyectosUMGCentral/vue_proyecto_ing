<template>
  <section>
    <section>
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <slot name="header" />
          <!-- <p class="modal-card-title">Login</p>
          <button type="button" class="delete" @click="$emit('close')" /> -->
        </header>
        <section class="modal-card-body">
          <slot name="body" />
          <!-- <b-field label="Email">
            <b-input
              type="email"
              :value="email"
              placeholder="Your email"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              :value="password"
              password-reveal
              placeholder="Your password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox> -->
        </section>
        <footer class="modal-card-foot">
          <slot name="footer" />
          <!-- <b-button label="Close" @click="$emit('close')" />
          <b-button label="Login" type="is-primary" /> -->
        </footer>
      </div>
    </section>
  </section>
</template>

<script>
export default {}
</script>
<style></style>
