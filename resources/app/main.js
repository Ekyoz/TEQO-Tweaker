const path = require('path')
const Electrolytic = require('../../node_modules/electrolytic')
const { app, BrowserWindow, Menu, nativeImage, Tray } = require('electron')
const {ipcMain} = require('electron');
const { PythonShell } = require('../../node_modules/python-shell');


app.on('ready', () => {
    app.allowRendererProcessReuse = false
    global.mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    autoHideMenuBar: true,
    useContentSize: true,
    transparent: false,
    frame: true,
    resizable: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  const splash = new BrowserWindow({
    width: 500,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  splash.loadURL(`file://${__dirname}/html/splashscreen.html`);
  mainWindow.loadURL(`file://${__dirname}/html/index.html`);
  
  ipcMain.on('request-mainprocess-action', (event) => {
    splash.destroy();
    mainWindow.show();
  });
})


