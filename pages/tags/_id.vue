<template>
  <div id="container">
    <div uk-grid class="uk-margin-small-bottom">
      <h2>タグ: {{ $store.getters['tags/getTags'].name }} の投稿</h2>
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
    this.fetchPostsByTagId(this.$route.params.id);
    this.fetchTagByTagId(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchPostsByTagId: "posts/fetchPostsByTagId",
      fetchTagByTagId: "tags/fetchTagByTagId"
    })
  }
};
</script>