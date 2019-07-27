<template>
  <div id="users">
    <div uk-grid class="uk-child-width-1-3@s">
      <div v-for="user in $store.getters['users/getUsers']" v-bind:key="user.id">
        <!-- 投稿カード -->
        <div class="uk-card uk-card-default uk-card-small">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-border-circle" width="30" height="30" src="../../assets/logo.png" />
              </div>
              <div class="uk-width-expand">
                <h3 class="uk-card-title">{{ user.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      users: []
    };
  },
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

