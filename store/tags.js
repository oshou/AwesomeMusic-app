import axios from "axios";

const API_URL = "http://192.168.33.200:8080";

// 状態の定義
export const state = () => ({
  tags: [],
  newTag: [],
  newTagAttach: []
});

// 状態の参照
export const getters = {
  getTags(state) {
    return state.tags;
  },
  getNewTag(state) {
    return state.newTag;
  },
  getNewTagAttach(state) {
    return state.newTagAttach;
  }
};

// 状態の更新処理
export const actions = {
  async fetchTags({ commit }) {
    await axios
      .get(API_URL + "/v1/tags")
      .then(res => {
        console.log(res.data);
        commit("setTags", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchTagByTagId({ commit }, q) {
    await axios
      .get(API_URL + "/v1/tags/" + q)
      .then(res => {
        console.log(res.data);
        commit("setTags", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchTagByTagName({ commit }, q) {
    await axios
      .get(API_URL + "/v1/tags/" + q)
      .then(res => {
        console.log(res.data);
        commit("setTags", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async addTag({ commit }, data) {
    await axios
      .post(API_URL + "/v1/tags", null, {
        params: {
          name: data
        }
      })
      .then(res => {
        console.log(res.data);
        commit("setNewTag", res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  },
  async attachTag({ commit }, data) {
    await axios
      .post(
        API_URL + "/v1/posts/" + data.post_id + "/tags/" + data.tag_id,
        null
      )
      .then(res => {
        console.log(res.data);
        commit("setNewTagAttach", res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setTags(state, tags) {
    state.tags = tags;
  },
  setNewTag(state, newTag) {
    state.newTag = newTag;
  },
  setNewTagAttach(state, newTagAttach) {
    state.newTagAttach = newTagAttach;
  }
};
