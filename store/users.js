import axios from "axios";

const API_URL = "http://192.168.33.200:8080";

// 状態の定義
export const state = () => ({
  users: []
});

// 状態の参照
export const getters = {
  getUsers(state) {
    return state.users;
  }
};

// 状態の更新処理
export const actions = {
  async fetchUsers({ commit }) {
    await axios
      .get(API_URL + "/v1/users")
      .then(res => {
        console.log("debug: fetchUsers done");
        commit("setUsers", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchUserByUserId({ commit }, q) {
    await axios
      .get(API_URL + "/v1/users/" + q)
      .then(res => {
        console.log("debug: fetchUserByUserId done");
        commit("setUsers", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};
