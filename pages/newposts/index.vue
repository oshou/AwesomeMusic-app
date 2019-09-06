<template>
  <div class="uk-container-expand" id="add_post">
    <div uk-grid class="uk-child-width-1-2@s">
      <form class="uk-form-stacked">
        <div class="margin">
          <label class="uk-form-label" id="form-stacked-text">Youtube URL</label>
          <input
            class="uk-input"
            id="form-stacked-text"
            type="text"
            v-model="formData.url"
            placeholder="Input Some Youtube URL..."
            name="url"
          />
        </div>
        <div class="maring">
          <label class="uk-form-label" for="form-stacked-select">Message</label>
          <input
            class="uk-input"
            id="form-stacked-text"
            type="text"
            v-model="formData.message"
            placeholder="Input Some message..."
            name="message"
          />
        </div>
        <button
          @click.prevent="handleAddTodo"
          class="uk-button uk-button-primary uk-button-large"
        >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      formData: {
        url: "",
        message: ""
      }
    };
  },
  methods: {
    async handleAddTodo() {
      if (this.formData.url != "" && this.formData.message != "") {
        await this.addPost(this.formData);
        this.formData.url = "";
        this.formData.message = "";
        this.$router.push("/");
      }
    },
    ...mapActions({
      addPost: "posts/addPost"
    })
  }
};
</script>