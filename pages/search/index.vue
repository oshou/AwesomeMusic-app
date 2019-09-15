<template>
  <div id="container">
    <div uk-grid class="uk-margin-small-bottom">
      <h2>キーワード: {{ keyword }} の検索結果</h2>
    </div>
    <ul class="uk-child-width-expand" uk-tab>
      <li class="uk-active">
        <nuxt-link v-bind:to="{ path: 'search', query : {type:'post_title', q:keyword}}">投稿タイトル</nuxt-link>
      </li>
      <li>
        <nuxt-link v-bind:to="{ path : 'search', query : {type:'user_name', q:keyword}}">ユーザー名</nuxt-link>
      </li>
      <li>
        <nuxt-link v-bind:to="{ path: 'search', query : {type:'tag_name', q:keyword}}">タグ名</nuxt-link>
      </li>
    </ul>
    <div v-if="search_type === 'post_title'">
      <PostWrapper />
    </div>
    <div v-else-if="search_type === 'tag_name'">
      <TagWrapper />
    </div>
    <div v-else-if="search_type === 'user_name'">
      <UserWrapper />
    </div>
    <div v-else>
      <p>該当データが見つかりません</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostWrapper from "@/components/PostWrapper";
import TagWrapper from "@/components/TagWrapper";
import UserWrapper from "@/components/UserWrapper";

export default {
  components: {
    PostWrapper,
    TagWrapper,
    UserWrapper
  },
  computed: {
    search_type: function() {
      return this.$route.query.type;
    },
    keyword: function() {
      return this.$route.query.q;
    }
  },
  created() {
    switch (this.search_type) {
      case "post_title":
        this.fetchPostsByPostTitle(this.keyword);
        break;
      case "tag_name":
        this.fetchTagsByTagName(this.keyword);
        break;
      case "user_name":
        this.fetchUsersByUserName(this.keyword);
        break;
      default:
        console.log("invalid search_type");
    }
  },
  updated() {
    switch (this.search_type) {
      case "post_title":
        this.fetchPostsByPostTitle(this.keyword);
        break;
      case "tag_name":
        this.fetchTagsByTagName(this.keyword);
        break;
      case "user_name":
        this.fetchUsersByUserName(this.keyword);
        break;
      default:
        console.log("invalid search_type");
    }
  },
  methods: {
    ...mapActions({
      fetchPostsByPostTitle: "posts/fetchPostsByPostTitle",
      fetchTagsByTagName: "tags/fetchTagsByTagName",
      fetchUsersByUserName: "users/fetchUsersByUserName"
    })
  }
};
</script>