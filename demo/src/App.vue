<template>
  <div id="app">
    <p style="text-align: left; margin:25px;">search with Title</p>
    <input type="text" v-model="searchValue" class="search-component" />
    
    <select v-model="selected" class="select-component">
      <option disabled value>Please select Completed Status</option>
      <option>True</option>
      <option>False</option>
      <option>Other</option>
    </select>
    <div v-for="item in filterResults(this.searchValue)" :key="item" class="to-do-list-item">
      <div v-for="(value, name) in item" :key="value">{{ name }}: {{ value }}
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      results: [],
      searchValue: "",
      selected: "",
    };
  },

  beforeMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        console.log(response.data);
        this.results = response.data;
      })
      .catch((error) => {
        console.log("Error while fetching data", error);
      });
  },
  methods: {
    filterResults(search) {
      if (search) {
        console.log("searhing");
        return this.results.filter((result) => result.title.includes(search));
      } else if (this.selected && this.selected.length > 0) {
        console.log("HERE");
        return this.results.filter((result) =>
          result.completed.toString().includes(this.selected.toLowerCase())
        );
      } else if (search && this.selected.length > 0) {
        return this.results.filter(
          (result) =>
            result.title.includes(search) &&
            result.completed.toString().includes(this.selected.toLowerCase())
        );
      } else {
        return this.results;
      }
      if (search) {
        return this.results.filter((result) => result.title.includes(search));
      } 
      else {
        return this.results;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
  
}
html,body{
  margin:0;
  padding:0;
  background-color:#033842;
}
h1,
h2 {
  font-weight: normal;
  
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.to-do-list {
  font-family: Roboto;
  list-style: none;
  margin: 20px auto;
  width: 50%;
  text-align: center;
  
}

.search-component {
  display: flex;
  justify-content: center !important;
  margin: 25px;
  background-color:#b2b8b6;
  position: relative;
}

.select-component {
  display: flex;
  margin: 25px;
  background-color:#b2b8b6;
  position: relative;
}

.to-do-list {
  font-family: Roboto;
  list-style: none;
  margin: 20px auto;
  width: 50%;
  text-align: center;
  
}

.to-do-list-item {
  display: inline-block;
  border: 0.1px ;
  border-radius: 5px;
  box-shadow: 0px 0px 75px -8px rgba(0,0,0,0.75);
  padding: 10px;
  background-color: #146b67;
  width: 350px;
  margin: 75px;
  text-align: center;
  transition: all 1s ease;
}
.to-do-list-item:hover{
-ms-transform: scale(1.5);

 -webkit-transform: scale(1.5);

 transform: scale(1.5);
}
</style>
