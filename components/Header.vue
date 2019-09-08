<template>
  <div id="header">
    <div class="uk-grid">
      <div id="logo">
        <nuxt-link to="/">
          <img
            src="../assets/logo_am_w450_h130.png"
            height="115.6"
            width="400"
            alt="AwesomeMusic-あなたの特別な1曲を共有しよう"
          />
        </nuxt-link>
      </div>
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
</template>

<style>
#header div {
  height: 130px;
  display: flex;
  /* 垂直方向の配置 */
  justify-content: space-between;
  /* 水平方向の配置 */
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