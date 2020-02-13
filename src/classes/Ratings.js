export default class Ratings {
    constructor(food, service, value, ambience, bonus){
        this.food = number(food);
        this.service = number(service);
        this.value = number(value);
        this.ambience = number(ambience);
        this.bonus = number(bonus);
    }
    getComputedValues(divisor, bonusMultiplier){
        return [this.food/divisor, this.service/divisor, this.value/divisor, this.ambience/divisor, (this.bonus*bonusMultiplier)/divisor]
    }
    getFinalRating(){
        return (this.food + this.service + this.value + this.ambience + this.bonus);
    }
}