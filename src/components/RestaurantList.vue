<template>
  <div id="RestaurantList">
    <div v-bind:key="restaurant.id" v-for="restaurant in restaurants">
      <h3>{{restaurant.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantList",
  props: ["restaurants"]
};
</script>

<style scoped>
</style>