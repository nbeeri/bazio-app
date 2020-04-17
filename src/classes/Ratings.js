const BONUS_MULTIPLIER = 0.2;
export default class Ratings {
    constructor(food = 0, service = 0, value = 0, ambience = 0, bonus = 0) {
        this.food = Number(food);
        this.service = Number(service);
        this.value = Number(value);
        this.ambience = Number(ambience);
        this.bonus = Number(bonus);
    }
    applyBonusMultiplier() {
        this.bonus *= BONUS_MULTIPLIER;
    }
    calculateTotalPoints() {
        var totalPoints = this.food + this.service + this.value + this.ambience + this.bonus;
        this.finalRating = totalPoints;
    }
}