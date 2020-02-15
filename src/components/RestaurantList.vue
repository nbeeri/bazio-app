<template>
  <div id="RestaurantList">
    <RestaurantListToolbar />
    <div id="ListArea">
      <RestaurantEntry v-bind:key="restaurant.id" v-for="restaurant in restaurants" v-bind:restaurant="restaurant" />
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
  background: #031F50;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #214494;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #5477C7;
}

</style>