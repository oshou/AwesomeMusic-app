<template>
  <div class="uk-container-expand" id="posts">
    <div uk-grid class="uk-child-width-1-3@s">
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
            <div id="modal">
              <a href="#" class="uk-button uk-button-text">5 Comments</a>
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
    return this.fetchPosts();
  },
  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts"
    })
  }
};
</script>