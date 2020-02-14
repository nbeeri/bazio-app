<template>
  <div id="toolbar">
    <button>
      <img class="toolIcon" src="../assets/icons/NewFile.svg" alt />Neu
    </button>
    <button>
      <img class="toolIcon" src="../assets/icons/SaveFile.svg" alt />Speichern
    </button>
    <button>
      <img class="toolIcon" src="../assets/icons/SaveAsNewFile.svg" alt />Speichern unter...
    </button>
    <button>
      <img class="toolIcon" src="../assets/icons/LoadFile.svg" alt />Öffnen
    </button>
  </div>
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped>
#toolbar {
  background: #3d77f5;
  display: flex;
}
img {
  height: 1.5em;
  margin-right: 0.5em;
}
button {
  font-family: "Segoe UI", Tahoma, Verdana, Arial, sans-serif;
  background: #3d77f5;
  transition: background 0.2s;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  padding: 1em;
  margin: 0 0.5em;
}
button:hover {
  background: #4c94ff;
}

button:active {
  background: #2d59b7;
}

button:focus {
  outline: none;
}
</style>