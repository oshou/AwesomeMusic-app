<template>
  <div id="container">
    <UserWrapper />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import UserWrapper from "@/components/UserWrapper";

export default {
  components: {
    UserWrapper
  },
  created() {
    return this.fetchUsers();
  },
  methods: {
    ...mapActions({
      fetchUsers: "users/fetchUsers"
    })
  }
};
</script>

