const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')
let win1
let win2
let win3
let win4

app.on('ready', function () { win1 = new BrowserWindow({ width: 1280, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win1.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win2 = new BrowserWindow({ width: 1280, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win2.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win3 = new BrowserWindow({ width: 1280, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win3.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win4 = new BrowserWindow({ width: 1280, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win4.webContents.loadFile('index.html', options)
//win4.webContents.openDevTools()

})
