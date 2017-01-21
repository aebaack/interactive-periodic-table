'use strict';

const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow; // Ensures garbage collection does not remove the window

app.on('ready', () => {
  // Creates the application window with specified dimension
  mainWindow = new BrowserWindow({
    height: 750,
    width: 750
  });

  // Loads index.html in as the main application page
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null; // allow window to be garbage collected
  });
});
