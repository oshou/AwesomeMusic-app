import axios from "axios";

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

// 状態の更新処理のコミット
export const actions = {
  async fetchPosts({ commit }) {
    const res = await axios.get("/v1/posts");
    commit("setPosts", res.data);
  },
  async fetchPostsFiltered({ commit }, query) {
    const res = await axios.get("/v1/search", {
      params: {
        q: query,
        type: title
      }
    });
    commit("setPosts", res.data);
  }
};

// 状態の更新処理
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  }
};
