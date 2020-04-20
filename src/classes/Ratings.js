const BONUS_MULTIPLIER = 0.2;
import Rating from "./Rating";
export default class Ratings {
    constructor(food = 0, service = 0, value = 0, ambience = 0, bonus = 0) {
        this.food = new Rating(food);
        this.service = new Rating(service);
        this.value = new Rating(value);
        this.ambience = new Rating(ambience);
        this.bonus = new Rating(bonus);
    }

    calculateTotalPoints() {
        var totalPoints = (this.food.value + this.service.value + this.value.value + this.ambience.value) / 4;
        this.bonus.value = this.round(this.bonus.value * BONUS_MULTIPLIER);
        totalPoints += this.bonus.value;
        this.finalRating = new Rating(this.round(totalPoints));
    }

    round(num) {
        num = Number(num);
        num = num.toFixed(1);
        if (num.slice(-2)== ".0"){
          num = num.slice(0, -2);
        }
        num = Number(num);
        return num;
      }
}