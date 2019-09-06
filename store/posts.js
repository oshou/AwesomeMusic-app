import axios from "axios";

const API_URL = "http://192.168.33.200:8080";

// 状態の定義
export const state = () => ({
  posts: []
});

// 状態の参照
export const getters = {
  getPosts(state) {
    return state.posts;
  }
};

// 状態の更新処理
export const actions = {
  async fetchPosts({ commit }) {
    const res = await axios.get(API_URL + "/v1/posts");
    console.log("debug: fetchPosts done");
    commit("setPosts", res.data);
  },
  async fetchPostsByTagId({ commit }, q) {
    const res = await axios.get(API_URL + "/v1/search?type=tag_id&q=" + q);
    console.log("debug: fetchPostsByTagId done");
    commit("setPosts", res.data);
  },
  async fetchPostsByUserId({ commit }, q) {
    const res = await axios.get(API_URL + "/v1/search?type=user_id&q=" + q);
    console.log("debug: fetchPostsByUserId done");
    commit("setPosts", res.data);
  },
  async addPost({ commit }, data) {
    const res = await axios.post(API_URL + "/v1/posts", null, {
      params: {
        user_id: "1",
        url: data.url,
        message: data.message
      }
    });
    commit("setPosts", res.data);
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  }
};
