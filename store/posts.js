import axios from "axios";

export const state = () => ({
  posts: []
});

export const actions = {
  async getPosts({ commit }) {
    const res = await axios.get("http://192.168.33.200:8080/v1/oshou/posts");
    commit("setPosts", res);
  },
  async searchByTitle({ commit }) {
    const res = await axios.get("http://192.168.33.200:8080/v1/search/posts");
    commit("setPosts", res);
  },
  async searchByTag({ commit }) {
    const res = await axios.get("http://192.168.33.200:8080/v1/search/tags");
    commit("setPosts", res);
  },
  async searchByTag({ commit }) {
    const res = await axios.get("http://192.168.33.200:8080/v1/search/users");
    commit("setPosts", res);
  }
};

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  }
};
