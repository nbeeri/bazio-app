<template>
  <div id="app">
    <Toolbar @save-file-as-new="saveFileAsNew" @load-file="loadRestaurantFile" />
    <div id="mainArea">
      <RestaurantList
        v-bind:restaurants="restaurants"
        v-bind:selectedRestaurant="selectedRestaurant"
        @restaurant-selected="selectRestaurant"
        @add-restaurant="addRestaurant"
      />
      <Editor v-bind:selectedRestaurant="selectedRestaurant" @delete-restaurant="deleteRestaurant" />
    </div>
  </div>
</template>

<script>
import Restaurant from "./classes/Restaurant";
//import Ratings from "./classes/Ratings";
import Toolbar from "./components/Toolbar";
import RestaurantList from "./components/RestaurantList";
import Editor from "./components/Editor";
import { saveFile, loadFile } from "./classes/FileManager.js";

export default {
  name: "App",
  components: {
    Toolbar,
    RestaurantList,
    Editor
  },
  data() {
    return {
      restaurants: [],
      selectedRestaurant: { id: null } //placeholder
    };
  },
  methods: {
    saveFileAsNew() {
      saveFile(this.restaurants);
    },
    loadRestaurantFile() {
      loadFile().then(newData => {
        let newRestaurants = [];
        newData.forEach(loadedRestaurant => {
          let newRestaurant = new Restaurant();
          newRestaurant.unpackLoadedRestaurant(loadedRestaurant);
          newRestaurants = [...newRestaurants, newRestaurant]; //add restaurant to the array
        });
        this.restaurants = newRestaurants;
        this.selectedRestaurant = this.restaurants[0];
      });
    },
    selectRestaurant(id) {
      this.selectedRestaurant = this.restaurants.filter(
        restaurant => restaurant.id == id
      )[0];
    },
    addRestaurant() {
      var newRestaurant = new Restaurant();
      this.restaurants.unshift(newRestaurant);
      this.selectRestaurant(newRestaurant.id);
    },
    deleteRestaurant() {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id != this.selectedRestaurant.id
      );
      this.selectedRestaurant = this.restaurants[0]
        ? this.restaurants[0]
        : { id: null };
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Segoe UI", Tahoma, Verdana, Arial, sans-serif;
  font-size: 14px;
  color: black;
  background-color: white;
  box-sizing: border-box;
  height: 100vh;
  user-select: none;
}

#app {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

#mainArea {
  flex-grow: 1;
  overflow: hidden;
  display: flex;
}

button {
  font-family: "Segoe UI", Tahoma, Verdana, Arial, sans-serif;
  background: rgba(255, 255, 255, 0);
  transition: background-color 0.2s;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  padding: 1em;
}

button:hover {
  background: rgba(255, 255, 255, 0.2);
}
button:active {
  background: rgba(0, 0, 0, 0.2);
}
button:focus {
  outline: none;
}
.ButtonIcon {
  height: 1.3em;
  margin-right: 0.5em;
}
</style>