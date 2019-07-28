import axios from "axios";

// 状態の定義
export const state = () => ({
  tags: []
});

// 状態の参照
export const getters = {
  getTags(state) {
    return state.tags;
  }
};

// 状態の更新処理
export const actions = {
  async fetchTags({ commit }) {
    const res = await axios.get("/v1/tags");
    commit("setTags", res.data);
  },
  async fetchTagsFiltered({ commit }, query) {
    const res = await axios.get("/v1/search", {
      params: {
        q: query,
        type: tag
      }
    });
    commit("setTags", res.data);
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setTags(state, tags) {
    state.tags = tags;
  }
};
