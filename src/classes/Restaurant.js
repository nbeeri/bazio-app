import uuid from "uuid";
import Ratings from "./Ratings";
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
        this.updateRatings();


    }
    updateRatings() {
        const divisor = 2 // = number or reviewers
        const bonusMultiplier = 0.2;
        let values1 = ratings1.getComputedValues(divisor, bonusMultiplier);
        let values2 = ratings2.getComputedValues(divisor, bonusMultiplier);
        let results = [];
        for (let i = 0; i < values1.length; i++) {
            results[i] = values1[i] + values2[i];
        }
        this.computedRatings = new Ratings(...results);
        this.finalRating = this.computedRatings.getFinalRating;
    }
}