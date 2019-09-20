<template>
  <div class="uk-container-expand" id="add_post">
    <div uk-grid class="uk-child-width-expand">
      <h2>新規投稿</h2>
    </div>
    <div uk-grid class="uk-child-width-1-2">
      <form class="uk-form-stacked" @submit.prevent="doPost">
        <div class="uk-margin">
          <label class="uk-form-label">Title</label>
          <input type="text" v-model="formInput.title" name="title" class="uk-input" />
        </div>
        <div>
          <label class="uk-form-label">URL</label>
          <input type="text" v-model="formInput.url" name="url" class="uk-input" />
        </div>
        <div class="uk-margin">
          <label class="uk-form-label">Tags</label>
          <input type="text" v-model="formInput.tags" name="tags" class="uk-input" />
        </div>
        <div class="uk-margin">
          <label class="uk-form-label">message</label>
          <input type="text" v-model="formInput.message" name="message" class="uk-input" />
        </div>
        <div class="uk-margin-medium-bottom">
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
    async doPost() {
      if (
        this.formInput.title != "" &&
        this.formInput.url != "" &&
        this.formInput.tags != "" &&
        this.formInput.message != ""
      ) {
        // 投稿追加
        await this.$store.dispatch("posts/addPost", {
          user_id: 1,
          title: this.formInput.title,
          url: this.formInput.url,
          message: this.formInput.message
        });
        const tags = this.formInput.tags.split(",");
        for (let tag of tags) {
          // 新規タグ追加
          await this.$store.dispatch("tags/addTag", tag);
          // 新規投稿に新規タグ登録
          await this.$store.dispatch("tags/attachTag", {
            post_id: this.$store.state.posts.newPost.id,
            tag_id: this.$store.state.tags.newTag.id
          });
        }
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
.uk-input {
  border-radius: 15px;
}

.uk-button {
  border-radius: 15px;
}
</style>