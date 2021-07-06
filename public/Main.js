const { app, BrowserWindow, ipcMain } = require('electron')
const { is } = require('electron-util');
const path = require('path')
const fs = require('fs')
const { Client, Authenticator } = require('minecraft-launcher-core');
const nativeImage = require('electron').nativeImage;
var image = nativeImage.createFromPath(__dirname + 'public/images/icon.png');
// where public folder on the root dir

image.setTemplateImage(true);

const runMC = (token, minRam, maxRam, event, mcVersions) => {
  const launcher = new Client();
  const opts = {
    clientPackage: null,
    authorization: token,
    root: "./minecraft",
    version: {
      number: mcVersions,
      type: "release"
    },
    memory: {
      max: minRam,
      min: maxRam,
    }

  }
  launcher.launch(opts);
  launcher.on('debug', (e) => console.log(e));
  launcher.on('data', (e) => console.log(e));
  launcher.on('download', () => event.reply('loadingStart'));
  launcher.on('progress', () => event.reply('loading'));
  launcher.on('arguments', () => event.reply('starting'));
  launcher.on('close', () => event.reply('closed'))
}
const logIn = (event, user, pass, minRam, maxRam, mcVersions) => {
  if (pass) {
    Authenticator.getAuth(user, pass).then(token => runMC(token, minRam, maxRam, event, mcVersions)).catch(err => {
      console.log(err)
      event.reply('loginError', { error: 'Login/password Error' })
    }
    )
  } else {
    Authenticator.getAuth(user).then(token => runMC(token, minRam, maxRam, event, mcVersions))
  }
}


function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    resizable: false,
    transparent: false,
    frame: false,
    thickFrame: false,
    transparent: true,
    icon: path.join(__dirname, './images/icon.png'),

    webPreferences: {
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
  win.setMenu(null)
}

app.on('ready', createWindow)

ipcMain.on('memory', (event, arg) => {
  console.log(event, arg.maxRam, arg.minRam,)
})

ipcMain.on('logIn', (event, arg) => {
  logIn(event, arg.user, arg.pass, arg.maxRam, arg.minRam, arg.mcVersions)
})

// ipcMain.on('saveTheme', (event, arg) => {
//   console.log(arg)
//   // fs.writeFileSync('theme.json', arg)
// })
