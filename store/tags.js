import axios from "axios";

const API_URL = "http://192.168.33.200:8080";

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
    const res = await axios.get(API_URL + "/v1/tags");
    console.log("debug: fetchTags done");
    commit("setTags", res.data);
  },
  async fetchTagsFiltered({ commit }, q) {
    const res = await axios.get(API_URL + "/v1/search?q=" + q + "&type=tag");
    console.log("debug: fetchTagsFiltered done");
    commit("setTags", res.data);
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setTags(state, tags) {
    state.tags = tags;
  }
};
