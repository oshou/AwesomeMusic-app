<template>
  <div id="sidenav">
    <div class="uk-align-left">
      <!-- 検索窓-->
      <div id="search">
        <form @submit.prevent="search" class="uk-search uk-search-navbar">
          <span uk-search-icon></span>
          <input
            class="uk-search-input"
            v-model="formInput.keyword"
            placeholder="検索したいキーワードを入力"
            @keyup.enter.native="search('formInput')"
          />
        </form>
      </div>

      <!-- Nav -->
      <div id="nav">
        <ul class="uk-nav uk-nav-default">
          <li>
            <nuxt-link to="/posts">
              <span uk-icon="play"></span> Posts
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/users">
              <span uk-icon="users"></span> Users
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tags">
              <span uk-icon="tag"></span> Tags
            </nuxt-link>
          </li>
          <li id="new_post">
            <nuxt-link to="/posts/new">
              <span uk-icon="plus"></span> Add Post
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      formInput: {
        keyword: ""
      }
    };
  },
  methods: {
    async search() {
      this.$router.push({
        path: "/search",
        query: { type: "post_title", q: this.formInput.keyword }
      });
      this.formInput.keyword = "";
    }
  }
};
</script>

<style>
#sidenav {
  width: 260px;
}

.uk-align-left {
  margin: 0px;
  padding: 0px;
}

.uk-icon {
  padding-right: 7px;
}

#search form {
  border: 1px;
  border-radius: 15px;
  background-color: whitesmoke;
  width: 260px;
  margin-bottom: 15px;
}

#search input {
  font-size: 0.8rem;
}

#nav li {
  font-size: 1rem;
  margin-left: 10px;
  margin-top: 15px;
}

#new_post {
  margin-top: 50px;
}
</style>
