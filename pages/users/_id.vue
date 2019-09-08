<template>
  <div class="uk-container-expand" id="posts">
    <div uk-grid class="uk-child-width-expand">
      <h2>ユーザ: {{ $store.getters['users/getUsers'].name }}の投稿</h2>
    </div>
    <div uk-grid class="uk-child-width-1-2@s">
      <div v-for="post in $store.getters['posts/getPosts']" v-bind:key="post.id">
        <div class="uk-card uk-card-small uk-card-default uk-column-span">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <span uk-icon="icon: play-circle; ratio: 1.8"></span>
              </div>
              <div class="uk-width-expand">
                <h4 class="uk-card-title uk-margin-remove-bottom">{{post.title}}</h4>
                <p class="uk-text-meta uk-margin-remove-top">{{ post.url }}</p>
              </div>
            </div>
          </div>
          <div class="uk-card-body">
            <p>{{ post.message }}</p>
          </div>
          <div class="uk-card-footer">
            <div uk-grid>
              <div class="uk-width-auto">
                <p>xxx / xxx / xxx</p>
              </div>
              <div class="uk-width-expand">
                <nuxt-link v-bind:to="{name: 'posts-id-comments',params:{id:post.id}}">
                  <span uk-icon="icon: comments; ratio: 1.0"></span>
                </nuxt-link>
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
      posts: []
    };
  },
  created() {
    this.fetchPostsByUserId(this.$route.params.id);
    this.fetchUserByUserId(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchPostsByUserId: "posts/fetchPostsByUserId",
      fetchUserByUserId: "users/fetchUserByUserId"
    })
  }
};
</script>