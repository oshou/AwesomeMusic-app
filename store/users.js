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
    const res = await axios.get(API_URL + "/v1/users");
    console.log("debug: fetchUsers done");
    commit("setUsers", res.data);
  },
  async fetchUserByUserId({ commit }, q) {
    const res = await axios.get(API_URL + "/v1/users/" + q);
    console.log("debug: fetchUserByUserId done");
    commit("setUsers", res.data);
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};
