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
  flex-direction: row;
  display: flex;
}
img {
  height: 1.3em;
  margin-right: 0.5em;
}
button {
  margin: 0 0.5em;
}
</style>