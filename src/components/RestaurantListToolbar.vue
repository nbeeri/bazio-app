<template>
  <div id="RestaurantListToolbar">
    <button>
      <img class="toolIcon" src="../assets/icons/Add.svg" alt />Hinzufügen
    </button>
    <button>
      <img class="toolIcon" src="../assets/icons/Sort.svg" alt />Sortieren
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
img {
  height: 1.2em;
  margin-right: 0.5em;
}
button {
  margin: 0 0.5em;
}
</style>