<template>
  <div id="toolbar">
    <button>
      <img class="ButtonIcon" src="../assets/icons/NewFile.svg" />Neu
    </button>
    <button>
      <img class="ButtonIcon" src="../assets/icons/SaveFile.svg" />Speichern
    </button>
    <button v-on:click="$emit('save-file-as-new')">
      <img class="ButtonIcon" src="../assets/icons/SaveAsNewFile.svg" />Speichern unter...
    </button>
    <button v-on:click="$emit('load-file')">
      <img class="ButtonIcon" src="../assets/icons/LoadFile.svg" />Öffnen
    </button>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
};
</script>

<style scoped>
#toolbar {
  background: #3d77f5;
  flex-direction: row;
  display: flex;
}

button {
  margin: 0 0.5em;
}
</style>