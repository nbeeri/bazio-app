const { dialog } = require('electron').remote;
const fs = require('fs');

export function loadFile() {
    return new Promise((resolve, reject) => {
        dialog.showOpenDialog((filePaths) => {
            if (filePaths === undefined) {
                reject("Keine Datei ausgewählt");
            } else {
                var fileData = fs.readFileSync(filePaths[0]);
                var parsedData = JSON.parse(fileData);
                resolve(parsedData);
            }
        })
    })
}

export function saveFile(object) {
    let saveData = JSON.stringify(object);

    dialog.showSaveDialog((filePath) => {
        if (filePath === undefined) {
            return;
        }

        fs.writeFileSync(filePath, saveData, (err) => {
            if (err) {
                console.error("Error while creating file: " + err);
            }
        });
    });
}

export function exportCSV(restaurants) {
    let csvString = "";
    let isFirstIteration = true;
    restaurants.forEach(restaurant => {
        const exportObject = {
            name: restaurant.name,
            category: restaurant.category,
            address: restaurant.address,
            reviewDate: restaurant.getReviewDateString(),
            reviewTime: restaurant.reviewTime,
            price: restaurant.getPriceIndicatorString(),
            comment: restaurant.comment,

            foodRating1: restaurant.ratings1.food.value,
            foodRating2: restaurant.ratings2.food.value,
            foodRatingResult: restaurant.resultingRatings.food.value,

            serviceRating1: restaurant.ratings1.service.value,
            serviceRating2: restaurant.ratings2.service.value,
            serviceRatingResult: restaurant.resultingRatings.service.value,

            priceValueRating1: restaurant.ratings1.priceValue.value,
            priceValueRating2: restaurant.ratings2.priceValue.value,
            priceValueRatingResult: restaurant.resultingRatings.priceValue.value,

            ambienceRating1: restaurant.ratings1.ambience.value,
            ambienceRating2: restaurant.ratings2.ambience.value,
            ambienceRatingResult: restaurant.resultingRatings.ambience.value,

            bonusRating1: restaurant.ratings1.bonus.value,
            bonusRating2: restaurant.ratings2.bonus.value,
            bonusRatingResult: restaurant.resultingRatings.bonus.value,

            finalRating: restaurant.resultingRatings.finalRating.value
        }

        //If it is the first iteration, build the CSV-header with column names
        if (isFirstIteration) {
            let keys = Object.keys(exportObject);
            keys.forEach(key => {
                csvString += key + ";";
            });
            //Insert new line instead of separator after last item
            csvString = csvString.slice(0, csvString.length - 1) + "\n";


            isFirstIteration = false;
        }

        let exportValues = Object.values(exportObject);

        exportValues.forEach(value => {

            //Check for illegal chracters (";" is used as CSV separator)
            let valueStr = "" + value;
            if (valueStr.indexOf(";") != -1) {
                throw "illegal chracter (;)";
            }
            csvString += value + ";";
        });
        //Insert new line instead of separator after last item
        csvString = csvString.slice(0, csvString.length - 1) + "\n";
    });
    //Last row doesn't need the line separator, so cut it off
    csvString = csvString.slice(0, csvString.length - 1);
    dialog.showSaveDialog((filePath) => {
        if (filePath === undefined) {
            console.error("Error while choosing filepath");
        }

        fs.writeFileSync(filePath, csvString, { encoding: "utf16le" }, (err) => {
            if (err) {
                console.error("Error while creating file: " + err);
            }
        });
    });
}
