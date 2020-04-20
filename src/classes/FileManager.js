const { dialog } = require('electron').remote;
var fs = require('fs');

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
                alert("An error ocurred creating the file " + err.message)
            }

            alert("The file has been succesfully saved");
        });
    });
}