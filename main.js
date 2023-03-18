const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')

let win1
let win2
let win3

app.on('ready', function () { win1 = new BrowserWindow({ width: 800, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true ,preload: path.join(__dirname, 'preload.js') } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win1.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
//win1.webContents.openDevTools()
})

app.on('ready', function () { win2 = new BrowserWindow({ width: 800, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true ,preload: path.join(__dirname, 'preload.js') } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win2.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
//win2.webContents.openDevTools()
})

app.on('ready', function () { win3 = new BrowserWindow({ width: 800, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true ,preload: path.join(__dirname, 'preload.js') } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win3.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
//win3.webContents.openDevTools()
})
