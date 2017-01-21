'use strict';

const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow; // Ensures garbage collection does not remove the window

app.on('ready', () => {
  // Creates the application window and sets its dimensions to fill the screen
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width,
    height
  });

  // Loads index.html in as the main application page
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null; // allow window to be garbage collected
  });
});
