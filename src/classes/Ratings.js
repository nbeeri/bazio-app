export default class Ratings {
    constructor(food, service, value, ambience, bonus){
        this.food = Number(food);
        this.service = Number(service);
        this.value = Number(value);
        this.ambience = Number(ambience);
        this.bonus = Number(bonus);
    }
    getComputedValues(divisor, bonusMultiplier){
        return [this.food/divisor, this.service/divisor, this.value/divisor, this.ambience/divisor, (this.bonus*bonusMultiplier)/divisor]
    }
    getFinalRating(){
        return (this.food + this.service + this.value + this.ambience + this.bonus)/5;
    }
}