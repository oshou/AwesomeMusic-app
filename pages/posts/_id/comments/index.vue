<template>
  <div class="uk-container-expand" id="comments">
    <div uk-grid class="uk-margin-small-bottom">
      <h2>投稿: {{ $store.getters['posts/getPosts'].title }} のコメント</h2>
    </div>
    <div uk-grid class="uk-child-width-1-1">
      <div v-for="comment in $store.getters['comments/getComments']" v-bind:key="comment.id">
        <div class="uk-card uk-card-small uk-card-default uk-column-span">
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <span uk-icon="icon: comment; ratio: 1.8"></span>
              </div>
              <div class="uk-width-expand">
                <h4 class="uk-card-title uk-margin-remove-bottom">{{comment.comment}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div uk-grid class="uk-child-width-1-2">
        <form class="uk-from-stacked" @submit.prevent="addComment">
          <div class="uk-margin">
            <label class="uk-form-label">Comment</label>
            <input type="text" v-model="formInput.comment" name="comment" class="uk-input" />
          </div>
          <div class="uk-margin-medium-bottom">
            <button type="submit" class="uk-button uk-button-default">
              <span uk-icon="icon: plus; ratio: 1.0"></span>投稿
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      comments: [],
      formInput: []
    };
  },
  created() {
    this.fetchComments(this.$route.params.id);
    this.fetchPostByPostId(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchPostByPostId: "posts/fetchPostByPostId",
      fetchComments: "comments/fetchComments",
      addComment: "comments/addComment"
    }),
    async addComment() {
      const input = {
        user_id: 1,
        post_id: this.$route.params.id,
        comment: this.formInput.comment
      };
      console.log(input.user_id);
      console.log(input.post_id);
      console.log(input.comment);
      await this.$store.dispatch("comments/addComment", input);
    }
  }
};
</script>