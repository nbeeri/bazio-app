<template>
  <div @click="selectRestaurant" class="restaurantEntry">
    <p class="restaurantTitle">{{restaurant.name}}</p>
    <div class="entryInfo">
      <div class="left">
        <p class="restaurantDesc">{{restaurant.category}}</p>
        <p class="restaurantDesc">{{restaurant.resultingRatings.finalRating | round}} Punkte</p>
      </div>
      <div class="right">
        <p class="restaurantDesc">Getestet am WIP</p>
        <p class="restaurantDesc">Bearbeitet am WIP</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantEntry",
  props: ["restaurant"],
  methods: {
    selectRestaurant(){
      this.$emit("restaurant-selected", this.restaurant.id);
    }
  },
  filters: {
  round: function (value) {
    return value.toFixed(1);
  }
}
};
</script>

<style scoped>
.restaurantEntry {
  padding: 1em;
  border-bottom-style: solid;
  border-color: #3d77f5;
  border-width: 1px;
  min-height: min-content;
}
.entryInfo {
  display: flex;
  align-items: stretch;
}

.left {
  flex-grow: 0;
}
.right {
  flex-grow: 1;
  text-align: right;
}
.restaurantTitle {
  font-weight: bold;
  color: #2A56B9;
}
</style>