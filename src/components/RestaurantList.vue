<template>
  <div id="RestaurantList">
    <RestaurantListToolbar @add-restaurant="addRestaurant"/>
    <div id="ListArea">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <RestaurantEntry v-bind:restaurant="restaurant" @restaurant-selected="selectRestaurant"/>
      </div>

    </div>

  </div>
</template>

<script>
import RestaurantListToolbar from "./RestaurantListToolbar"
import RestaurantEntry from "./RestaurantEntry"
export default {
  name: "RestaurantList",
  props: ["restaurants"],
  components: {
    RestaurantListToolbar,
    RestaurantEntry
  },
  methods: {
    selectRestaurant(id) {
      this.$emit("restaurant-selected", id);
    },
    addRestaurant(){
      console.log("(1)Emitting from RestaurantList.")
      this.$emit("add-restaurant");
      console.log("(2)Emitted from RestaurantList.")
    }
  }
};
</script>

<style scoped>
#RestaurantList{
  width: 25em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
#ListArea {
  flex-grow: 1;
  overflow-y: scroll;
}
/* width */
::-webkit-scrollbar {
  width: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #E6E6E6;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #B8B8B8;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8A8A8A;
}

</style>