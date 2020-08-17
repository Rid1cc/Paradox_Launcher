const {app, BrowserWindow, ipcMain } = require('electron')    
const path = require('path')
const fs = require('fs')
const { Client, Authenticator } = require('minecraft-launcher-core');

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
        max: "6000",
        min: "4000"
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
        icon: path.join(__dirname, './images/icon.png'),

        webPreferences: {
          webSecurity: false,
          nodeIntegration: true
        }}) 

    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    win.setMenu(null)
    // win.maximaze()
    // win.setMaximizable(false)
    // win.setResizable(false)


}
app.on('ready', createWindow)

ipcMain.on('logIn', (event, arg) => {
  logIn(event, arg.user, arg.pass)
})

ipcMain.on('saveTheme', (event, arg) => {
  console.log(arg)
  // fs.writeFileSync('theme.json', arg)
})