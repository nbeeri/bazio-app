const uuidv1 = require("uuid/v1");
import Ratings from "./Ratings";
export default class Restaurant {
    constructor(name, category, address, reviewDate, reviewTime, price, comment, ratings1, ratings2) {
        this.id = uuidv1();
        this.name = (name) ? name : "Neues Restaurant";
        this.category = category;
        this.address = address;
        this.reviewDateString = reviewDateString;
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

    formatReviewDate(){
        var inputDate = this.reviewDateString;
        //look for separating periods in the date of the format 01.05.2020
        var p1 = inputDate.indexOf(".");
        var p2 = inputDate.indexOf(".", p1 + 1);
        var day = 1, month = 1, year = 2000; //initialize with default values

        try {
          if (p1 != -1 && p2 != -1) {
            day = Number(inputDate.slice(0, p1)); //get the number before the fist period (day)
            
            month = Number(inputDate.slice(p1 + 1, p2)); //get the number between the 2 periods (month)
  
            year = inputDate.slice(p2 + 1); //get the rest (year)
            year = Number(year.padStart(4, "2000"));

            if (day == 0) throw "invalid day"
            if (month == 0) throw "invalid month"
  
            var dateObj = new Date(year, month-1, day-1);
            //since Date will attempt to fix invalid dates by shifting the month or year, this will check whether something has been shifted
            if (dateObj.getDate() != day) throw "invalid Day";
            if (dateObj.getMonth() != month-1) throw "invalid month";
            if (dateObj.getFullYear() != year) throw "invalid year";
  
            
          } else {
            throw "invalid input";
          }
        } catch {}
      }

}

