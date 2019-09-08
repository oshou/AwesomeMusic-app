<template>
  <div class="uk-container-expand" id="comments">
    <div uk-grid class="uk-child-width-1-1@s">
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
      <form @submit.prevent="addComment">
        <p>
          comment:
          <input type="text" v-model="formInput.comment" name="comment" />
        </p>
        <button type="submit">投稿</button>
      </form>
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
    return this.fetchComments(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchComments: "comments/fetchComments",
      addComment: "comments/addComment"
    }),
    async addComment() {
      const input = {
        user_id: 1,
        post_id: this.$route.params.id,
        comment: this.formInput.comment
      };
      await this.$store.dispatch("comments/addComment", input);
    }
  }
};
</script>