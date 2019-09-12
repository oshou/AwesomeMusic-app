<template>
  <div class="uk-container-expand" id="users">
    <div uk-grid class="uk-child-width-1-3@s">
      <div v-for="user in $store.getters['users/getUsers']" v-bind:key="user.id">
        <nuxt-link v-bind:to="{name: 'users-id',params:{id:user.id}}">
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

<script>
import { mapActions } from "vuex";

export default {
  created() {
    return this.fetchUsers();
  },
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers"
    })
  }
};
</script>

