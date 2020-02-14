import uuid from "uuid";
import Ratings from "../classes/Ratings.js";
export default class Restaurant {
    constructor(name, category, address, reviewDate, reviewTime, price, comment, ratings1, ratings2) {
        this.id = uuid.v1();
        this.name = name;
        this.category = category;
        this.address = address;
        this.reviewDate = reviewDate;
        this.reviewTime = reviewTime;
        this.price = price;
        this.comment = comment;
        this.ratings1 = ratings1;
        this.ratings2 = ratings2;
        this.lastEdited = new Date();
        this.updateRatings();

    }
    updateRatings() {
        const divisor = 2 // = number or reviewers
        const bonusMultiplier = 0.2;
        let values1 = this.ratings1.getComputedValues(divisor, bonusMultiplier);
        let values2 = this.ratings2.getComputedValues(divisor, bonusMultiplier);
        let results = [];
        for (let i = 0; i < values1.length; i++) {
            results[i] = values1[i] + values2[i];
        }
        this.computedRatings = new Ratings(...results);
        this.finalRating = this.computedRatings.getFinalRating;
    }
    updateLastEdited(){
        this.lastEdited = new Date();
    }
}