<template>
  <div id="app">
    <Toolbar />
    <RestaurantList v-bind:restaurants="restaurants" />
  </div>
</template>

<script>
import Restaurant from "./classes/Restaurant.js";
import Ratings from "./classes/Ratings.js";
import Toolbar from "./components/Toolbar";
import RestaurantList from "./components/RestaurantList";
export default {
  name: "App",
  components: {
    Toolbar,
    RestaurantList
  },
  data() {
    return {
      restaurants: [
        new Restaurant(
          "Das Restaurant",
          "Gutbürgerlich",
          "Musterstraße 1",
          new Date(2019, 10, 25),
          2,
          2,
          "Ganz geil hier",
          new Ratings(9, 7, 8, 9, 0),
          new Ratings(10, 8, 9, 8, 1)
        ),
        new Restaurant(
          "Da Romeo",
          "Pizzeria",
          "Beispielweg 2, 1234 Innsbruck",
          new Date(2019, 9, 13),
          2,
          2,
          "Ein rundes Angebot",
          new Ratings(7, 7, 8, 6, 1),
          new Ratings(8, 7, 7, 6, 2)
        ),
        new Restaurant(
          "Adler",
          "Deutsch",
          "Hauptstraße 10, 75365 Calw-Stammheim",
          new Date(2019, 9, 26),
          2,
          4,
          "Macht auf Etepetete, aber wenig dahinter.",
          new Ratings(5, 4, 3, 4, 0),
          new Ratings(4, 3, 4, 5, 0)
        )
      ]
    };
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
  color: white;
  background-color: #010c1f;
}
</style>
