<template>
  <div class="uk-container-expand" id="posts">
    <div uk-grid class="uk-child-width-expand">
      <h2>tag_id: {{ $route.params.id }}の投稿</h2>
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
            <div class="uk-width-auto">
              <a href="#" class="uk-button">
                <span uk-icon="icon: comments; ratio: 1.0"></span>
              </a>
              <a href="#" class="uk-button">
                <span uk-icon="icon: comments; ratio: 1.0"></span>
              </a>
              <a href="#" class="uk-button">
                <span uk-icon="icon: plus; ratio: 1.0"></span>
              </a>
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
    return this.fetchPostsByTagId(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchPostsByTagId: "posts/fetchPostsByTagId"
    })
  }
};
</script>