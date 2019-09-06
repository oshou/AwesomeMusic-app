<template>
  <div id="header">
    <div class="uk-grid">
      <div class="uk-width-1-2@m uk-text-left">
        <nuxt-link to="/">
          <img src="../assets/logo_am_w400.png" alt="AwesomeMusic-あなたの特別な1曲を共有しよう" />
        </nuxt-link>
      </div>
      <div class="uk-width-1-2@m uk-text-right">
        <div v-if="loggedIn()">
          <nuxt-link to="/logout">
            <button class="uk-button uk-button-primary">Logout</button>
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link to="/login">
            <button class="uk-button uk-button-primary">Login</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#header {
  height: 130px;
}
</style>

<script>
export default {
  methods: {
    loggedIn() {
      return this.$auth0.isAuthenticated();
    }
  }
};
</script>