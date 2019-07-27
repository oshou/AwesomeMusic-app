<template>
  <div id="tags">
    <div uk-grid class="uk-child-width-1-3@s">
      <div v-for="tag in $store.getters['tags/getTags']" v-bind:key="tag.id">
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
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      tags: []
    };
  },
  created() {
    return this.fetchTags();
  },
  methods: {
    ...mapActions({
      fetchTags: "tags/fetchTags"
    })
  }
};
</script>