<template>
  <div id="header">
    <div id="logo">
      <nuxt-link to="/">
        <img src="../assets/title_logo_gray.png" />
        <span>あなたの特別な1曲を共有しよう</span>
      </nuxt-link>
    </div>
    <div id="login">
      <div v-if="loggedIn()" class="content">
        <nuxt-link to="/logout">
          <button class="uk-button uk-button-primary">Logout</button>
        </nuxt-link>
      </div>
      <div v-if="!loggedIn()" class="content">
        <nuxt-link to="/login">
          <button class="uk-button uk-button-primary">Login</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
#header {
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
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