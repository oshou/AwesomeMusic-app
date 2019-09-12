<template>
  <div id="container">
    <ul class="uk-child-width-expand" uk-tab>
      <li class="uk-active">
        <nuxt-link v-bind:to="{name: 'search',params:{type:post_title,q:$route.query.q}}">投稿タイトル</nuxt-link>
      </li>
      <li>
        <nuxt-link v-bind:to="{name: 'search',params:{type:user_name,q:$route.query.q}}">ユーザー名</nuxt-link>
      </li>
      <li>
        <nuxt-link v-bind:to="{name: 'search',params:{type:tag_name,q:$route.query.q}}">タグ名</nuxt-link>
      </li>
    </ul>
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
  computed() {},
  created() {
    const search_type = this.$route.query.type;
    const q = this.$route.query.q;

    switch (search_type) {
      case "post_title":
        this.fetchPostsByPostTitle(q);
        console.log("post_title test");
        break;
      case "tag_name":
        this.fetchPostsByTagName(q);
        console.log("tag_name test");
        break;
      case "user_name":
        this.fetchPostsByUserName(q);
        console.log("user_name test");
        break;
      default:
        console.log("invalid search_type");
    }
  },
  methods: {
    ...mapActions({
      fetchPostsByPostTitle: "posts/fetchPostsByPostTitle",
      fetchPostsByTagName: "posts/fetchPostsByTagName",
      fetchPostsByUserName: "posts/fetchTagByUserName"
    })
  }
};
</script>