const uuidv1 = require("uuid/v1");
import Ratings from "./Ratings";
export default class Restaurant {
  constructor(name, category, address, reviewDate, reviewTime, price, comment, ratings1, ratings2) {
    this.id = uuidv1();
    this.name = (name) ? name : "Neues Restaurant";
    this.category = category;
    this.address = address;

    try {
      this.setReviewDate(reviewDate);
    } catch {
      this.reviewDate = undefined;
    }
    this.reviewDateDisplay = "";
    this.dateError = false;

    this.reviewTime = reviewTime;
    this.price = (price) ? price : "1";
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
    this.reviewDate = new Date(loadedRestaurant.reviewDate);
    this.reviewDateDisplay = loadedRestaurant.reviewDateDisplay;
    this.dateError = loadedRestaurant.dateError;
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
      valueSums[i] = (ratingValues1[i].value + ratingValues2[i].value) / 2;
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

  setReviewDate(inputDate) {
    var dateObj;
    try {
      var p1 = inputDate.indexOf(".");
      var p2 = inputDate.indexOf(".", p1 + 1);
      if (p1 == -1 || p2 == -1) {
        throw "invalid format (no periods found)";
      }

      let day = Number(inputDate.slice(0, p1));


      let month = Number(inputDate.slice(p1 + 1, p2));


      let year = inputDate.slice(p2 + 1); //get the rest (year)
      year = Number(year.padStart(4, "2000")); //set to 4-digit format


      dateObj = new Date(year, month - 1, day);

      console.log("Processed Date Object: " + dateObj.toLocaleDateString());

      console.log("day: " + day);
      console.log("month: " + month);
      console.log("year: " + year);

      if (dateObj.getDate() != day) throw "invalid day (no valid date)";
      if (dateObj.getMonth() != month - 1) throw "invalid month (no valid date)";
      if (dateObj.getFullYear() != year) throw "invalid year (no valid date)";

    } catch (err) {
      this.dateObj = "";
      throw "invalid date";
    } finally {
      this.reviewDate = dateObj;
    }
  }

  getReviewDateString() {
    try {
      let day = "" + this.reviewDate.getDate();
      let month = "" + (this.reviewDate.getMonth() + 1);
      let year = "" + this.reviewDate.getFullYear();
      day = day.padStart(2, '0');
      month = month.padStart(2, '0');
      return `${day}.${month}.${year}`;
    } catch {
      return "";
    }
  }
  getPriceIndicatorString() {
    let output = "";
    switch (Number(this.price)) {
      case 1:
        output = "€";
        break;
      case 1.5:
        output = "€-€€";
        break;
      case 2:
        output = "€€";
        break;
      case 2.5:
        output = "€€-€€€";
        break;
      case 3:
        output = "€€€";
    }
    return output;
  }

}