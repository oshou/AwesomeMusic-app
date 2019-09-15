<template>
  <div id="container">
    <TagWrapper />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TagWrapper from "@/components/TagWrapper";

export default {
  components: {
    TagWrapper
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