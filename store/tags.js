import axios from "axios";

const API_URL = "http://192.168.33.200:8080";

// 状態の定義
export const state = () => ({
  tags: [],
  newTag: []
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
        commit("setTags", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchTagsByTagName({ commit }, q) {
    await axios
      .get(API_URL + "/v1/search?type=tag_name&q=" + q)
      .then(res => {
        commit("setTags", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchTagByPostId({ commit }, data) {
    await axios
      .get(API_URL + "/v1/posts/" + data.post_id + "/tags")
      .then(res => {
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
        commit("setNewTag", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async attachTag({ commit }, data) {
    await axios
      .post(
        API_URL + "/v1/posts/" + data.post_id + "/tags/" + data.tag_id,
        null
      )
      .then(res => {
        commit("setNewTagAttach", res.data);
      })
      .catch(err => {
        console.error(err);
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
