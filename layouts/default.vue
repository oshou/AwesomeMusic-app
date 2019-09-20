<template>
  <div id="app">
    <div class="uk-container uk-container-expand">
      <Header />
      <div class="uk-container uk-container-expand">
        <SideNav />
        <div class="contents">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

export default {
  name: "default",
  components: {
    Header,
    SideNav
  }
};
</script>