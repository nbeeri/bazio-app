<template>
  <div id="RestaurantListToolbar">
    <button @click="addRestaurant">
      <img src="../assets/icons/Add.svg" alt />Hinzufügen
    </button>
    <button>
      <img src="../assets/icons/Sort.svg" alt />Sortieren
    </button>
  </div>
</template>

<script>
export default {
  name: "RestaurantListToolbar",
  methods: {
    addRestaurant(){
      console.log("(1)Emitting from RestaurantListToolbar.")
      this.$emit("add-restaurant");
      console.log("(2)Emitted from RestaurantListToolbar.")
    }
  }
};
</script>

<style scoped>
#RestaurantListToolbar {
  background: #2A56B9;
  display: flex;
}
img {
  height: 1.2em;
  margin-right: 0.5em;
}
button {
  margin: 0 0.5em;
}
</style>