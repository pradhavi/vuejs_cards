import Vue from 'vue'
import App from './App.vue'

import axios from "axios";

new Vue({
  el: '#app',
  data() {
    return {
      results: [],
    };
  },
  beforeMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        console.log(response.data)
        this.results = response.data
      });
  },
  render: h => h(App),
})
