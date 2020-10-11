const {app, BrowserWindow, ipcMain } = require('electron')
const { is } = require('electron-util');    
const path = require('path')
const fs = require('fs')
const { Client, Authenticator } = require('minecraft-launcher-core');
const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + 'public/images/icon.png'); 
 // where public folder on the root dir

    image.setTemplateImage(true);

const runMC = (token, minRam, maxRam) => {
  const launcher = new Client();
  const opts  = {
    clientPackage: null,
    authorization: token,
    root: "./minecraft",
    version: {
        number: "1.15.2",
        type: "release"
    },
    memory: {
        max: minRam,
        min: maxRam,
    }
    //i just can't do it normally so max ram is min ram etc. XDD
  }
  launcher.launch(opts);
  launcher.on('debug', (e) => console.log(e));
  launcher.on('data', (e) => console.log(e));

}
const logIn = (event, user, pass, minRam, maxRam) => {
    if(pass) {
      Authenticator.getAuth(user, pass).then(token => runMC(token)).catch(err => {
        console.log(err)
        event.reply('loginError', {error: 'Login/password Error'})
      }
        )
    } else {
      Authenticator.getAuth(user).then(token => runMC(token, minRam, maxRam))
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

ipcMain.on('memory', (event, arg) => {
  console.log(event, arg.maxRam, arg.minRam)
})

ipcMain.on('logIn', (event, arg) => {
  logIn(event, arg.user, arg.pass, arg.maxRam, arg.minRam)
})

// ipcMain.on('saveTheme', (event, arg) => {
//   console.log(arg)
//   // fs.writeFileSync('theme.json', arg)
// })
