const { dialog } = require('electron').remote;
var fs = require('fs');

export function loadFile() {
    return new Promise((resolve, reject) => {
        dialog.showOpenDialog((filePaths) => {
            console.log(filePaths);
            if (filePaths === undefined) {
                console.log("Keine Datei ausgewählt");
                reject("Keine Datei ausgewählt");
            } else {
                console.log("else..." + filePaths);
                var fileData = fs.readFileSync(filePaths[0]);
                var parsedData = JSON.parse(fileData);
                resolve(parsedData);
            }
        })
    })
}

export function saveFile(object) {
    let saveData = JSON.stringify(object);

    // You can obviously give a direct path without use the dialog (C:/Program Files/path/myfileexample.txt)
    dialog.showSaveDialog((filePath) => {
        if (filePath === undefined) {
            console.log("You didn't save the file");
            return;
        }
        console.log(filePath);

        // fileName is a string that contains the path and filename created in the save file dialog.  
        fs.writeFileSync(filePath, saveData, (err) => {
            if (err) {
                alert("An error ocurred creating the file " + err.message)
            }

            alert("The file has been succesfully saved");
        });
    });
}