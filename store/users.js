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
        commit("setUsers", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  async fetchUsersByUserName({ commit }, q) {
    await axios
      .get(API_URL + "/v1/search?type=user_name&q=" + q)
      .then(res => {
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
