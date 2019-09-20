<template>
  <div class="uk-container-expand" id="users">
    <div uk-grid class="uk-child-width-1-3">
      <div v-for="user in users" v-bind:key="user.id">
        <nuxt-link v-bind:to="{ name: 'users-id', params: { id: user.id }}">
          <div class="uk-card uk-card-default uk-card-small">
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                  <span uk-icon="icon: user; ratio: 1.5"></span>
                </div>
                <div class="uk-width-expand">
                  <h3 class="uk-card-title">{{ user.name }}</h3>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style>
.uk-card {
  border-radius: 20px;
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    users: function() {
      return this.$store.getters["users/getUsers"];
    }
  }
};
</script>