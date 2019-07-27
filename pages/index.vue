<template>
  <div id="latest">
    <div uk-grid class="uk-child-width-1-3@s">
      <div v-for="latest in latests" v-bind:key="latest.id">
        <!-- 投稿カード -->
        <div class="uk-card uk-card-small uk-card-default uk-column-span">
          <!-- Header -->
          <div class="uk-card-header">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-border-circle" width="30" height="30" src="../assets/logo.png" />
              </div>
              <div class="uk-width-expand">
                <h4 class="uk-card-title uk-margin-remove-bottom">Title</h4>
                <p class="uk-text-meta uk-margin-remove-top">{{ latest.url }}</p>
              </div>
            </div>
          </div>
          <!-- Body -->
          <div class="uk-card-body">
            <div class="uk-card-badge uk-label">test</div>
            <p>{{ latest.message }}</p>
          </div>
          <!-- Body -->
          <div class="uk-card-body">
            <div class="uk-card-badge uk-label">test</div>
            <p>{{ latest.tags }}</p>
          </div>
          <!-- Footer -->
          <div class="uk-card-footer">
            <div id="modal">
              <a href="#" class="uk-button uk-button-text">5 Comments</a>
            </div>
          </div>
          <p>store: {{ posts }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      latests: []
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  created() {
    return this.$axios
      .get("http://192.168.33.200:8080/v1/posts")
      .then(res => (this.latests = res.data));
  },
  methods: {
    SearchByPosts() {
      this.$axios
        .get("http://192.168.33.200:8080/v1/posts")
        .then(res => (this.latests = res.data));
    }
  }
};
</script>