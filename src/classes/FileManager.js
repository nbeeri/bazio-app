const { dialog } = require('electron').remote

exports.openFileDialog = function () {
    dialog.showOpenDialogSync(null, {
        title: "Datei öffnen",
        properties: "openFile"
    })
}