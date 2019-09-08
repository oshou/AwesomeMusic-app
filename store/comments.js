import axios from "axios";

const API_URL = "http://192.168.33.200:8080";

// 状態の定義
export const state = () => ({
  comments: []
});

// 状態の参照
export const getters = {
  getComments(state) {
    return state.comments;
  }
};

// 状態の更新
export const actions = {
  async fetchComments({ commit }, data) {
    await axios
      .get(API_URL + "/v1/posts/" + data + "/comments")
      .then(res => {
        console.log("debug: fetchComments done");
        commit("setComments", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async addComment({ commit }, data) {
    await axios.post(
      API_URL + "/v1/posts/" + data.post_id + "/comments",
      null,
      {
        params: {
          user_id: data.user_id,
          comment: data.comment
        }
      }
        .then(res => {
          console.log(res.data);
          commit("setComments", res.data);
        })
        .catch(err => {
          console.error(err);
        })
    );
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setComments(state, comments) {
    state.comments = comments;
  }
};
