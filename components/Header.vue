<template>
  <div id="header">
    <div class="uk-grid">
      <div class="uk-width-1-2@m uk-text-left">
        <nuxt-link to="/">
          <img
            src="../assets/logo_am_w450_h130.png"
            width="450"
            height="130"
            alt="AwesomeMusic-あなたの特別な1曲を共有しよう"
          />
        </nuxt-link>
      </div>
      <div class="uk-width-1-2@m uk-text-right">
        <div id="logout" v-if="loggedIn()">
          <button class="uk-button uk-button-primary">
            <span uk-icon="sign-out"></span> Login
          </button>
        </div>
        <div v-else id="login">
          <nuxt-link to="/login">
            <button id="login-button" class="uk-button uk-button-primary">
              <span uk-icon="sign-in"></span> Login
            </button>
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