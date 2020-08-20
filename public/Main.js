const {app, BrowserWindow, ipcMain } = require('electron')
const { is } = require('electron-util');    
const path = require('path')
const fs = require('fs')
const { Client, Authenticator } = require('minecraft-launcher-core');
const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + 'public/images/icon.png'); 
 // where public folder on the root dir

    image.setTemplateImage(true);

const runMC = (token) => {
  const launcher = new Client();
  const opts = {
    clientPackage: null,
    authorization: token,
    root: "./minecraft",
    version: {
        number: "1.14",
        type: "release"
    },
    memory: {
        max: "16000",
        min: "6000"
    }
  }
  launcher.launch(opts);
  launcher.on('debug', (e) => console.log(e));
  launcher.on('data', (e) => console.log(e));

}
const logIn = (event, user, pass) => {
    if(pass) {
      Authenticator.getAuth(user, pass).then(token => runMC(token)).catch(err => {
        console.log(err)
        event.reply('loginError', {error: 'Login/password Error'})
      }
        )
    } else {
      Authenticator.getAuth(user).then(token => runMC(token))
    }
  }


function createWindow () {       
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
          nodeIntegration: true
        }}) 

    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    win.setMenu(null)
}

app.on('ready', createWindow)

ipcMain.on('logIn', (event, arg) => {
  logIn(event, arg.user, arg.pass)
})

ipcMain.on('saveTheme', (event, arg) => {
  console.log(arg)
  // fs.writeFileSync('theme.json', arg)
})
