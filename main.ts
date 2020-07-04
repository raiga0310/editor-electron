import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 750,
        height: 650,
        webPreferences: {
            preload: path.join(__dirname, "preload.ts")
        }
    });

    mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});
