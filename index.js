const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron

let win

app.on('ready', function () {
  win = new BrowserWindow({
    width: 800,
    transparent: true,
    frame: false,
    webPreferences: {
      sandbox: true,    
      nodeIntegration: true,
      webviewTag: true
    }

  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
	  protocol: 'file',
    slashes: true
  }))
  
  
})

// win.webContents.openDevTools()
