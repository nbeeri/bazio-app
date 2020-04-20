<template>
  <div id="background">
    <button @click="increase" :disabled="atMax">
      <img src="../assets/icons/ChevronUp.svg" />
    </button>
    <input v-model="rating.value" type="number" @change="checkValue" />
    <button @click="decrease" :disabled="atMin">
      <img src="../assets/icons/ChevronDown.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "PointCounter",
  props: ["rating", "min", "max"],
  computed: {
    atMax() {
      return this.rating.value >= this.max;
    },
    atMin() {
      return this.rating.value <= this.min;
    }
  },
  methods: {
    checkValue() {
      this.rating.value = Number(this.rating.value);
      this.rating.value = Math.round(this.rating.value);
      if (this.rating.value < this.min) {
        this.rating.value = this.min;
      } else if (this.rating.value > this.max) {
        this.rating.value = this.max;
      }
      this.$emit("rating-updated");
    },
    increase() {
      this.rating.value++;
      this.$emit("rating-updated");
    },
    decrease() {
      this.rating.value--;
      this.$emit("rating-updated");
    }
  }
};
</script>

<style scoped>
#background {
  background-color: #3d77f52c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 3em;
  color: black;
  text-align: center;
  background: none;
  padding-bottom: 0.1em;
  outline: none;
  border: none;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Verdana, Arial, sans-serif;
  font-size: 160%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  background-color: none;
  margin: 0.1em;
  padding: 0.05em 1em;
}

img {
  height: 1em;
  width: auto;
  margin: 0;
}
</style>