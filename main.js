const electron = require('electron')
const url = require('url')
const path = require('path')

const { app, BrowserWindow } = electron
let win

app.enableSandbox()
app.whenReady().then(() => {
  // any sandbox:false calls are overridden since `app.enableSandbox()` was called.
  const win = new BrowserWindow()
  win.loadURL('https://google.com')
})
