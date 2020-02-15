<template>
  <div class="restaurantEntry">
    <p class="restaurantTitle">{{restaurant.name}}</p>
    <div class="entryInfo">
      <div class="left">
        <p class="restaurantDesc">{{restaurant.category}}</p>
        <p class="restaurantDesc">{{restaurant.finalRating | round}} Punkte</p>
      </div>
      <div class="right">
        <p class="restaurantDesc">Getestet am {{restaurant.reviewDate.toLocaleDateString()}}</p>
        <p class="restaurantDesc">Bearbeitet am {{restaurant.lastEdited.toLocaleDateString()}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantEntry",
  props: ["restaurant"],
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
.restaurantDesc {
  color: #3d77f5;
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
}
</style>