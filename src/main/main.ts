import { app, BrowserWindow } from "electron";
import { ipcMain } from "electron";
import * as path from "path";
import { promises } from "fs";
const { readFile } = promises;

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 750,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "../renderer/preload.js")
        }
    });

    mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

ipcMain.on("asynchronous-message", async (event, arg) => {
    console.log(arg);
    event.reply("asynchronous-reply","pong");
});

ipcMain.on("synchronous-message", (event, arg) => {
   console.log(arg);
   event.returnValue = "ping";
});
