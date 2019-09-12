<template>
  <div id="container">
    <div uk-grid class="uk-margin-small-bottom">
      <h2>ユーザ: {{ $store.getters['users/getUsers'].name }}の投稿</h2>
    </div>
    <PostWrapper />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostWrapper from "@/components/PostWrapper";

export default {
  components: {
    PostWrapper
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