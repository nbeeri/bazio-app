<template>
  <div @click="selectRestaurant" class="restaurantEntry">
    <p class="restaurantTitle">{{restaurant.name}}</p>
    <div class="entryInfo">
      <div class="left">
        <p v-if="restaurant.category" class="restaurantDesc">{{restaurant.category}}</p>
        <br v-else />
        <p class="restaurantDesc">{{restaurant.resultingRatings.finalRating.value | round}} Punkte</p>
      </div>
      <div class="right">
        <p v-if="restaurant.reviewDate" class="restaurantDesc">Getestet am {{restaurant.reviewDate}}</p>
        <br v-else />
        <p class="restaurantDesc">Bearbeitet am {{restaurant.lastEdited | date}}</p>
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
  },
  date: function (date) {
    var dd = date.getDate().toString().padStart(2, "0");
    var mm = (date.getMonth() + 1).toString().padStart(2, "0");
    var yy = date.getFullYear().toString().padStart(2, "0");
    return `${dd}.${mm}.${yy}`
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