<template>
  <div id="RestaurantList">
    <RestaurantListToolbar @add-restaurant="$emit('add-restaurant')" @sort-restaurants="$emit('sort-restaurants')"/>
    <div id="ListArea">
      <div
        class="entryContainer"
        :class="{selected: restaurant.id == selectedRestaurant.id}"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <RestaurantEntry v-bind:restaurant="restaurant" @restaurant-selected="selectRestaurant" />
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantListToolbar from "./RestaurantListToolbar";
import RestaurantEntry from "./RestaurantEntry";
export default {
  name: "RestaurantList",
  props: ["restaurants", "selectedRestaurant"],
  components: {
    RestaurantListToolbar,
    RestaurantEntry
  },
  methods: {
    selectRestaurant(id) {
      this.$emit("restaurant-selected", id);
    }
  }
};
</script>

<style scoped>
#RestaurantList {
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
  background: #e6e6e6;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b8b8b8;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #8a8a8a;
}
.entryContainer {
  transition: border-width 0.2s, background-color 0.2s;
  border-left: 0px solid #3d77f5;
}

.entryContainer:hover {
  background-color: #9999992c;
}
.selected {
  border-left-width: 12px;
  background-color: #3d77f52c !important;
}
</style>