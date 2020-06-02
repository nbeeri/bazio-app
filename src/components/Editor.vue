<template>
  <div id="Editor">
    <div id="EditorToolbar">
      <button v-if="selectedRestaurant.id" @click="deleteRestaurant">
        <img class="ButtonIcon" src="../assets/icons/Delete.svg" alt />Löschen
      </button>
    </div>
    <div v-if="selectedRestaurant.id" id="EditorMainArea">
      <div id="RestaurantMeta">
        <label for="Name">Name</label>
        <input v-model="selectedRestaurant.name" type="text" id="Name" />

        <label for="Category">Kategorie</label>
        <input v-model="selectedRestaurant.category" type="text" id="Category" />

        <label for="Address">Adresse</label>
        <input v-model="selectedRestaurant.address" type="text" id="Address" />

        <label for="Date">Getestet am</label>
        <input
          v-model="selectedRestaurant.reviewDateDisplay"
          type="text"
          id="Date"
          @blur="updateReviewDate"
          v-bind:class="{DateError: selectedRestaurant.dateError}"
        />

        <label for="Time">Tageszeit</label>
        <select v-model="selectedRestaurant.reviewTime" id="Time">
          <option value="Morgens">Morgens</option>
          <option value="Mittags">Mittags</option>
          <option value="Abends">Abends</option>
        </select>

        <label for="Price">Preisklasse</label>
        <div id="PriceInputArea">
          <input
            v-model="selectedRestaurant.price"
            type="range"
            min="1"
            max="3"
            step="0.5"
            id="Price"
          />
          <div id="PriceDisplay">{{priceIndicator}}</div>
        </div>

        <label for="Comment">Anmerkungen</label>
        <textarea
          v-model="selectedRestaurant.comment"
          name="Comment"
          id="Comment"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div id="RestaurantRatings">
        <p></p>
        <p class="ColHeading">Yannik</p>
        <p class="ColHeading">Lukas</p>
        <p class="ColHeading">Gesamt</p>

        <!--FOOD-->
        <div class="IconBox">
          <img class="RatingIcon" src="../assets/icons/Food.svg" alt />
        </div>
        <PointCounter
          :rating="selectedRestaurant.ratings1.food"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <PointCounter
          :rating="selectedRestaurant.ratings2.food"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <div class="CategoryResult">{{selectedRestaurant.resultingRatings.food.value}}</div>

        <!--SERVICE-->
        <div class="IconBox">
          <img class="RatingIcon" src="../assets/icons/Service.svg" alt />
        </div>
        <PointCounter
          :rating="selectedRestaurant.ratings1.service"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <PointCounter
          :rating="selectedRestaurant.ratings2.service"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <div class="CategoryResult">{{selectedRestaurant.resultingRatings.service.value}}</div>

        <!--PRICEVALUE-->
        <div class="IconBox">
          <img class="RatingIcon" src="../assets/icons/Value.svg" alt />
        </div>
        <PointCounter
          :rating="selectedRestaurant.ratings1.priceValue"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <PointCounter
          :rating="selectedRestaurant.ratings2.priceValue"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <div class="CategoryResult">{{selectedRestaurant.resultingRatings.priceValue.value}}</div>

        <!--AMBIENCE-->
        <div class="IconBox">
          <img class="RatingIcon" src="../assets/icons/Ambience.svg" alt />
        </div>
        <PointCounter
          :rating="selectedRestaurant.ratings1.ambience"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <PointCounter
          :rating="selectedRestaurant.ratings2.ambience"
          :min="0"
          :max="10"
          @rating-updated="updateRatings"
        />
        <div class="CategoryResult">{{selectedRestaurant.resultingRatings.ambience.value}}</div>

        <!--AMBIENCE-->
        <div class="IconBox">
          <img class="RatingIcon" src="../assets/icons/Bonus.svg" alt />
        </div>
        <PointCounter
          :rating="selectedRestaurant.ratings1.bonus"
          :min="0"
          :max="5"
          @rating-updated="updateRatings"
        />
        <PointCounter
          :rating="selectedRestaurant.ratings2.bonus"
          :min="0"
          :max="5"
          @rating-updated="updateRatings"
        />
        <div class="CategoryResult">{{selectedRestaurant.resultingRatings.bonus.value}}</div>
        <div id="FinalResultBox">Endpunktzahl:</div>
        <div
          v-bind:class="{Perfect: perfectScore}"
          id="FinalResult"
        >{{selectedRestaurant.resultingRatings.finalRating.value}}</div>
      </div>
    </div>
    <div class="NoRestaurant" v-else>
      <img id="Logo" src="../assets/bazio_logo.svg" />
      <p
        id="Hint"
      >Wähle ein Restaurant auf der linken Seite aus, füge ein neues hinzu, oder öffne eine Datei.</p>
    </div>
  </div>
</template>

<script>
import PointCounter from "./PointCounter";
export default {
  name: "Editor",
  props: ["selectedRestaurant"],
  components: {
    PointCounter
  },
  computed: {
    perfectScore() {
      return this.selectedRestaurant.resultingRatings.finalRating.value >= 10; //returns true if the total score is at least 10
    },
    priceIndicator() {
      return this.selectedRestaurant.getPriceIndicatorString();
    }
  },
  methods: {
    updateRatings() {
      this.selectedRestaurant.updateFinalRatings();
    },

    deleteRestaurant() {
      this.$emit("delete-restaurant");
    },

    updateReviewDate() {
      try {
        this.selectedRestaurant.setReviewDate(
          this.selectedRestaurant.reviewDateDisplay
        );
        this.selectedRestaurant.dateError = false;
      } catch {
        this.selectedRestaurant.dateError = true;
      } finally {
        this.selectedRestaurant.reviewDateDisplay = this.selectedRestaurant.getReviewDateString();
      }
    }
  }
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
#EditorMainArea {
  display: flex;
  padding: 3em;
}

#RestaurantMeta {
  display: flex;
  flex-direction: column;
  width: 30em;
}

button {
  margin: 0 0.5em;
}

label {
  color: #2a56b9;
  margin: 0.6em 0.2em 0.2em 0;
}

input {
  outline: none;
  border: 1.5px solid #2a56b9;
  font-family: "Segoe UI", Tahoma, Verdana, Arial, sans-serif;
  padding: 0.2em;
}

#Name {
  font-size: 200%;
  font-weight: bold;
  padding: 0.2em;
}
select {
  outline: none;
  border: 1.5px solid #2a56b9;
  font-family: "Segoe UI", Tahoma, Verdana, Arial, sans-serif;
  padding: 0.2em;
}
textarea {
  resize: none;
  outline: none;
  border: 1.5px solid #2a56b9;
  font-family: "Segoe UI", Tahoma, Verdana, Arial, sans-serif;
  padding: 0.3em;
}

.NoRestaurant {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.5;
}

#Logo {
  height: 10em;
}

#Hint {
  font-weight: bold;
}

#RestaurantRatings {
  display: grid;
  padding-left: 3em;
  grid-template-columns: repeat(4, 5em);
  grid-template-rows: 1em repeat(6, 5em);
  grid-gap: 1em;
}
.IconBox {
  background-color: #2a56b9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.RatingIcon {
  height: 2.5em;
  width: 2.5em;
}

.ColHeading {
  text-align: center;
  color: #2a56b9;
}

.CategoryResult {
  background-color: #3d77f52c;
  color: #2a56b9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 200%;
  padding-bottom: 0.1em;
}
#FinalResultBox {
  background-color: #2a56b9;
  grid-column: 1 / span 3;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 200%;
  padding-bottom: 0.1em;
  padding-left: 0.6em;
}
#FinalResult {
  background-color: #2a56b9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 200%;
  padding-bottom: 0.1em;
}

.Perfect {
  background-color: goldenrod !important;
}

.DateError {
  border-color: rgb(184, 0, 0);
}
#PriceInputArea {
  display: flex;
  align-items: center;
  flex-direction: row;
}
#Price {
  flex-grow: 1;
}
#PriceDisplay {
  width: 6em;
  text-align: center;
  font-weight: bold;
  font-size: 150%;
  color: #2a56b9;
}
</style>
