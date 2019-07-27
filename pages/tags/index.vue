<template>
  <div id="tags">
    <div uk-grid class="uk-child-width-1-3@s">
      <div v-for="tag in tags" v-bind:key="tag.id">
        <!-- 投稿カード -->
        <div class="uk-card uk-card-default uk-card-small">
          <div class="uk-card-header">
            <h3 class="uk-card-title">{{ tag.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tags: []
    };
  },
  created() {
    return this.$axios
      .get("http://192.168.33.200:8080/v1/tags")
      .then(res => (this.tags = res.data));
  },
  methods: {
    SearchByPosts() {
      this.$axios
        .get("http://192.168.33.200:8080/v1/oshou/posts")
        .then(res => (this.posts = response.data));
    }
  }
};
</script>