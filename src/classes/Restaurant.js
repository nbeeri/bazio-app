const uuidv1 = require("uuid/v1");
import Ratings from "./Ratings";
export default class Restaurant {
    constructor(name, category, address, reviewDate, reviewTime, price, comment, ratings1, ratings2) {
        this.id = uuidv1();
        this.name = (name) ? name : "Neues Restaurant";
        this.category = category;
        this.address = address;
        this.reviewDate = reviewDate;
        this.reviewTime = reviewTime;
        this.price = price;
        this.comment = comment;
        this.ratings1 = (ratings1) ? ratings1 : new Ratings();
        this.ratings2 = (ratings2) ? ratings2 : new Ratings();
        this.resultingRatings = this.getResultingRatings();
        this.lastEdited = new Date();
    }

    unpackLoadedRestaurant(loadedRestaurant) {
        this.id = loadedRestaurant.id;
        this.name = loadedRestaurant.name;
        this.category = loadedRestaurant.category;
        this.address = loadedRestaurant.address;
        this.reviewDate = loadedRestaurant.reviewDate;
        this.reviewTime = loadedRestaurant.reviewTime;
        this.price = loadedRestaurant.price;
        this.comment = loadedRestaurant.comment;
        this.ratings1 = loadedRestaurant.ratings1;
        this.ratings2 = loadedRestaurant.ratings2;
        this.resultingRatings = this.getResultingRatings();
        this.lastEdited = new Date(loadedRestaurant.lastEdited);
    }

    getResultingRatings() {
        var ratingValues1 = Object.values(this.ratings1);
        var ratingValues2 = Object.values(this.ratings2);
        var valueSums = [];
        for (var i = 0; i < ratingValues1.length; i++) {
            valueSums[i] = (ratingValues1[i].value + ratingValues2[i].value)/2;
        }

        var finalRatings = new Ratings(...valueSums);
        finalRatings.calculateTotalPoints();

        return finalRatings;
    }
    updateLastEdited() {
        this.lastEdited = new Date();
    }

    updateFinalRatings() {
        this.resultingRatings = this.getResultingRatings();
    }

}

