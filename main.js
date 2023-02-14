const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron
let win

 app.on('ready', () => {
    win = new BrowserWindow({
      webPreferences: {
        sandbox: true
      }
    })
    win.loadURL('http://google.com')
  })
