import axios from "axios";

const API_URL = "http://192.168.33.200:8080";

// 状態の定義
export const state = () => ({
  posts: [],
  newPost: []
});

// 状態の参照
export const getters = {
  getPosts(state) {
    return state.posts;
  },
  getNewPost(state) {
    return state.newPost;
  }
};

// 状態の更新処理
export const actions = {
  async fetchPosts({ commit }) {
    await axios
      .get(API_URL + "/v1/posts")
      .then(res => {
        console.log(res.data);
        commit("setPosts", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchPostsByTagId({ commit }, q) {
    await axios
      .get(API_URL + "/v1/search?type=tag_id&q=" + q)
      .then(res => {
        console.log(res.data);
        commit("setPosts", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchPostsByUserId({ commit }, q) {
    await axios
      .get(API_URL + "/v1/search?type=user_id&q=" + q)
      .then(res => {
        console.log(res.data);
        commit("setPosts", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async addPost({ commit }, data) {
    await axios
      .post(API_URL + "/v1/posts", null, {
        params: {
          user_id: "1",
          title: data.title,
          url: data.url,
          message: data.message
        }
      })
      .then(res => {
        console.log(res);
        commit("setNewPost", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setPosts(state, val) {
    state.posts = val;
  },
  setNewPost(state, val) {
    state.newPost = val;
  }
};
