<template>
  <div class="uk-container-expand" id="latest">
    <div uk-grid class="uk-child-width-1-2">
      <div v-for="post in posts" v-bind:key="post.id">
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
                <!--
                <div v-for="tag in tags" v-bind:key="tag.id">
                  <a :href="`/tags/${tag.id}`">{{tag.name}}</a> /
                </div>
                -->
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

<style>
.uk-card {
  border-radius: 20px;
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    posts: function() {
      return this.$store.getters["posts/getPosts"];
    },
    tags: function() {
      return this.$store.getters["tags/getTags"];
    }
  }
};
</script>