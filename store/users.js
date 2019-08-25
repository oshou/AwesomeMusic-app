import axios from "axios";

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
    const res = await axios.get("/v1/users");
    console.log("debug: fetchUsers done");
    commit("setUsers", res.data);
  },
  async fetchUsersFiltered({ commit }, q) {
    const res = await axios.get("/v1/search?q=" + q + "&type=user");
    console.log("debug: fetchUsersFiltered done");
    commit("setUsers", res.data);
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};
