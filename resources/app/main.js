const {app, BrowserWindow, session} = require('electron')
const {ipcMain} = require('electron');

app.on('ready', () => {
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

  const splash = new BrowserWindow({ width: 500, height: 300 , frame : false, alwaysOnTop: true,     webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  }});

  splash.loadURL(`file://${__dirname}/html/splashscreen.html`);
  mainWindow.loadURL(`file://${__dirname}/html/index.html`);
  
  ipcMain.on('request-mainprocess-action', (event) => {
    splash.destroy();
    mainWindow.show();
  });
})


