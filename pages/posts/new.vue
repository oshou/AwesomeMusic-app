<template>
  <div class="uk-container-expand" id="add_post">
    <div uk-grid class="uk-child-width-expand">
      <h2>新規投稿</h2>
      <p>{{ $store.getters['posts/getNewPost']}}</p>
      <p>{{ $store.getters['tags/getNewTag']}}</p>
    </div>
    <div uk-grid class="uk-child-width-1-2@s">
      <form class="uk-form-stacked" @submit.prevent="doPost">
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-select">Title</label>
          <input
            type="text"
            v-model="formInput.title"
            name="title"
            class="uk-input"
            id="form-stacked-text"
          />
        </div>
        <div>
          <label class="uk-form-label" for="form-stacked-select">URL</label>
          <input
            type="text"
            v-model="formInput.url"
            name="url"
            class="uk-input"
            id="form-stacked-text"
          />
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-select">Tags</label>
          <input
            type="text"
            v-model="formInput.tags"
            name="tags"
            class="uk-input"
            id="form-stacked-text"
          />
        </div>
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-select">message</label>
          <input
            type="text"
            v-model="formInput.message"
            name="message"
            class="uk-input"
            id="form-stacked-text"
          />
        </div>
        <div class="uk-margin">
          <button type="submit" class="uk-button uk-button-default">
            <span uk-icon="icon: plus; ratio: 1.0"></span>投稿
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      formInput: {
        title: "",
        url: "",
        tags: "",
        message: ""
      }
    };
  },
  methods: {
    ...mapActions({
      addPost: "posts/addPost"
    }),
    doPost() {
      if (
        this.formInput.title != "" &&
        this.formInput.url != "" &&
        this.formInput.tags != "" &&
        this.formInput.message != ""
      ) {
        const postInput = {
          user_id: 1,
          title: this.formInput.title,
          url: this.formInput.url,
          message: this.formInput.message
        };
        this.$store.dispatch("posts/addPost", postInput);

        const tags = this.formInput.tags.split(",");
        for (let value of tags) {
          this.$store.dispatch("tags/addTag", value);
          const tagInput = {
            post_id: this.newPost,
            tag_id: this.newTag
          };
          this.$store.dispatch("tags/attachTag", tagInput);
        }
        this.$router.push("/");
      }
    }
  }
};
</script>