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
      nodeIntegration: true,
      webviewTag: true
    }

  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
	  protocol: 'file',
    slashes: true
  }))
  
  win.webContents.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/00000.00')
})

// win.webContents.openDevTools()
