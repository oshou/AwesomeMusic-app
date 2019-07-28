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
    commit("setUsers", res.data);
  },
  async fetchUsersFiltered({ commit }, query) {
    const res = await axios.get("/v1/search", {
      params: {
        q: query,
        type: user
      }
    });
    commit("setUsers", res.data);
  }
};

// 状態の更新処理のコミット
export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};
