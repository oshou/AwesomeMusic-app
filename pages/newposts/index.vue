<template>
  <div id="new_post">
    <form>
      <div class="form-group">
        <input type="text" v-model="formData.url" placeholder="test-url" name="url" />
      </div>
      <div class="form-group">
        <input type="text" v-model="formData.message" placeholder="test-message" name="message" />
      </div>
      <button @click.prevent="handleAddTodo" class="btn btn-primary">Submit</button>
    </form>
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