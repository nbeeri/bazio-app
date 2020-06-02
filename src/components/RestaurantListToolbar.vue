<template>
  <div id="RestaurantListToolbar">
    <button @click="$emit('add-restaurant')">
      <img class="ButtonIcon" src="../assets/icons/Add.svg" />Hinzufügen
    </button>
    <button @click="$emit('sort-restaurants')">
      <img class="ButtonIcon" src="../assets/icons/Sort.svg" />Sortieren
    </button>
  </div>
</template>

<script>
export default {
  name: "RestaurantListToolbar"
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