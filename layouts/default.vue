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
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";

export default {
  name: "default",
  components: {
    Header,
    SideNav,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Lato", "Noto Sans JP", "游ゴシック Medium", "游ゴシック体",
    "Yu Gothic Medium", YuGothic, "ヒラギノ角ゴ ProN",
    "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, "ＭＳ Ｐゴシック",
    "MS PGothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

.uk-container {
  margin: 0;
}

.uk-card {
  border-radius: 20px;
}

.uk-card-body {
  height: 50;
}
</style>