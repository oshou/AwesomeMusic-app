<template>
  <div id="container">
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
    this.fetchPosts();
  },
  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts"
    })
  }
};
</script>