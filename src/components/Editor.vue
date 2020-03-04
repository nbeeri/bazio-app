<template>
  <div id="Editor">
    <div id="EditorToolbar">
      <button>
        <img src="../assets/icons/Delete.svg" alt />Löschen
      </button>
    </div>
    <div id="EditorMainArea">
      <div id="RestaurantMeta"></div>
      <label for="Category">Name</label>
      <div class="formRow">
        <input type="text" id="name" />
      </div>
      <div class="formRow">
        <label for="Category">Kategorie</label>
        <input type="text" id="Category" />
      </div>
      <div class="formRow">
        <label for="Address">Adresse</label>
        <input type="text" id="Address" />
      </div>
      <div class="formRow">
        <label for="Date">Getestet am</label>
        <input type="date" id="Date" />
        <label for="Time">Tageszeit</label>
        <select id="Time">
          <option value="Morgens">Morgens</option>
          <option value="Mittags">Mittags</option>
          <option value="Abends">Abends</option>
        </select>
      </div>
      <div id="RestaurantRatings"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor"
};
</script>

<style scoped>
#EditorToolbar {
  background: #2a56b9;
  display: flex;
  flex-direction: row-reverse;
}
#Editor {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
#RestaurantMeta {
}
img {
  height: 1.2em;
  margin-right: 0.5em;
}
button {
  margin: 0 0.5em;
}
</style>
