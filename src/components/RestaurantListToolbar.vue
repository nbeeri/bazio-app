<template>
  <div id="RestaurantListToolbar">
    <button @click="addRestaurant">
      <img class="ButtonIcon" src="../assets/icons/Add.svg" />Hinzufügen
    </button>
    <button>
      <img class="ButtonIcon" src="../assets/icons/Sort.svg" />Sortieren
    </button>
  </div>
</template>

<script>
export default {
  name: "RestaurantListToolbar",
  methods: {
    addRestaurant(){
      this.$emit("add-restaurant");
    }
  }
};
</script>

<style scoped>
#RestaurantListToolbar {
  background: #2A56B9;
  display: flex;
}
button {
  margin: 0 0.5em;
}
</style>