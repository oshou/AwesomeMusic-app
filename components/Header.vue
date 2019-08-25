<template>
  <div id="header">
    <div class="uk-grid">
      <div class="uk-width-medium-1-2">
        <nuxt-link to="/">
          <img src="../assets/title_logo_gray.png" />
          <span>あなたの特別な1曲を共有しよう</span>
        </nuxt-link>
      </div>
      <div class="uk-width-medium-1-2 uk-text-right">
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