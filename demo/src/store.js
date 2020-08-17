import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex, axios)

export default new vuex.Store({
  state: {
    results: [],
    // res: "LOASDIN"
  },
  actions: {
    fetchData({ commit }) {
      console.log("DATA FETCHING")
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
          console.log(response.data);
          // this.results = response.data;
          commit('SET_RESULT', response.data)
        })
        .catch((error) => {
          console.log("Error while fetching data", error);
        });
    },
  },
  mutations: {
    SET_RESULT(state, results) {
      state.results = results
    },

  }
})
