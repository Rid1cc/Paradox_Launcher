//  _____  _     _ _          
// |  __ \(_)   | (_)         
// | |__) |_| __| |_| ___ ___ 
// |  _  /| |/ _` | |/ __/ __|
// | | \ \| | (_| | | (_| (__ 
// |_|  \_\_|\__,_|_|\___\___| paradox launcher -
// code is dark and chaotic for now.
// gonna be optimised in the future.
// If you want to modify this and you are able to share some experience with this code let me know. 
// You are able to use this software under MIT license (full license file is available in this repository)
// More about MIT -> https://choosealicense.com/licenses/mit/
                                        
import React from 'react';
import {Paper} from '@material-ui/core'
import './App.css'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import {useStyles} from './style'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CardSection } from './CardSection';
import {Infos} from './Infos'
import {Settings} from './Settings'
import {Error} from './Error'
import {LoginPanel} from './LoginPanel'
import ImageIcon from '@material-ui/icons/Image';
import {Themes} from './Themes'
import {Logo} from './Logo'
import {LoadBar} from './LoadBar'
import wall0 from './media/wall0.png'
import wall1 from './media/wall1.png'
import wall2 from './media/wall2.png'
import CancelIcon from '@material-ui/icons/Cancel';
//NPM COMMENT
const electron = window.require('electron')
const ipc = electron.ipcRenderer


document.body.style.overflow = "hidden"


const App = () => {
  //NPM COMMENT
  const [user, setUser] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [openError, setOpenError] = React.useState(false)
  const [openInfos, setOpenInfos] = React.useState(false)
  const [openSettings, setOpenSettings] = React.useState(false)
  const [openThemes, setOpenThemes] = React.useState(false)
  const [isPremium, setIsPremium] = React.useState(true)
  const [valueTheme, setValueTheme] = React.useState('');
  const [openVersions, setOpenVersions] = React.useState(false);
  const [mcVersions, setMcVersions] = React.useState(false);
  const classes = useStyles()
  const [color, setColor] = React.useState('#f50057');
  const [bgImg, setBgImg] = React.useState(wall0)
  const [minRam, setMinRam] = React.useState('4000');
  const [maxRam, setMaxRam] = React.useState('6000');
  

  const handleChangeMaxRam = (event) => {
    event.target.focus();
    setMaxRam(event.target.value);
  }
  
  const handleChangeMinRam = (event) => {
    event.target.focus();
    setMinRam(event.target.value);
  }


  const handleChangeVersions = (event) => {
    setMcVersions(event.target.value);
  };

  const handleCloseVersions = (event) => {
    setOpenVersions(false);
  };

  const handleOpenVersions = (event) => {
    setOpenVersions(true);
  };

  const handleChangeTheme = (event) => {
    setValueTheme(event.target.value);
  };
  
  const handleThemeSubmit = (event) => {
    event.preventDefault();

    if (valueTheme === 'a') {
      setColor('#f50057');
      setBgImg(wall0)
    } else if (valueTheme === 'b') {
      setColor('#4db6ac');
      setBgImg(wall1)
    } else {
      setColor('#43a047');
      setBgImg(wall2)
    }
  };
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      secondary: {
      main: color
      }      
    },
    typography: {
      fontFamily: "'Farsan', cursive",
      fontSize: 15,
    }
  });

    //NPM COMMENT
    //ASYNCH

    ipc.on('loginError', (event, args) => {
      setOpenError(true)
    });
    
    const handleClick = () => {
      ipc.send('logIn', {user, pass, minRam, maxRam});
      ipc.send('memory', {minRam, maxRam});
    }
    ipc.send('saveTheme', {theme: valueTheme})
    
    
  
    const handleUserChange = (event) => {
      event.preventDefault();
      event.target.focus();
      setUser(event.target.value)
    }
    const handlePremiumChange = event => {
      setIsPremium(event.target.checked)
      setPass('')
    }

    

  return (
    //BASIC THEME AND ROOT CSS
    <body>
    <div style={{
      // backgroundImage: 'url('+bgImg+')' ,
      backgroundSize: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: '3px solid #404040',
      borderRadius: '3px'
    }}>
    <iframe className={classes.overVid} id="ytplayer" type="text/html" controls='0' disablekb="0" fs="0" loop="1"
    src="https://www.youtube.com/embed/MLAjUatpzoM?autoplay=1"
    frameborder="0" allow='autoplay'/>
    <ThemeProvider theme={darkTheme}>
    <div className={classes.root}>

    {/* LOGO CAPTION */}
    <Logo/>

    {/* LOAD BAR */}
    <LoadBar/>

    {/* CARD SECTION */}
    <CardSection setOpenInfos={setOpenInfos} />

    {/* CORNER LEFT MENU */}
      <div className={classes.settings}>
        <Paper className={classes.settingsCanvas} onClick={() => setOpenSettings(true)}>
          <SettingsRoundedIcon color="secondary" className={classes.settingsIcon}/>   
        </Paper>
        <Paper className={classes.settingsCanvas} onClick={() => setOpenThemes(true)}>
          <ImageIcon color="secondary" className={classes.settingsIcon}/>   
        </Paper>
        <Paper className={classes.settingsCanvas} onClick={() => window.close()}>
          <CancelIcon color="secondary" className={classes.settingsIcon}/>   
        </Paper>
      </div>

    {/* FUNCTIONS */}
    <LoginPanel 
    //NPM COMMENT
     user={user}
     setUser={setUser}
     pass={pass}
     setPass={setPass}
     isPremium={isPremium}
     setIsPremium={setIsPremium}
     handleUserChange={handleUserChange}
     handlePremiumChange={handlePremiumChange}
     handleClick={handleClick}
     />
    <Error openError={openError} setOpenError={setOpenError}/>
    <Settings 
    openSettings={openSettings} 
    setOpenSettings={setOpenSettings}
    mcVersions={mcVersions}
    setMcVersions={setMcVersions}
    openVersions={openVersions}
    setOpenVersions={setOpenVersions}
    handleOpenVersions={handleOpenVersions}
    handleCloseVersions={handleCloseVersions} 
    handleChangeVersions={handleChangeVersions}
    minRam={minRam}
    handleChangeMinRam={handleChangeMinRam}
    maxRam={maxRam}
    handleChangeMaxRam={handleChangeMaxRam}
    />
    <Themes 
      openThemes={openThemes} 
      setOpenThemes={setOpenThemes}
      handleChangeTheme={handleChangeTheme}
      valueTheme={valueTheme}
      setValueTheme={setValueTheme}
      handleThemeSubmit={handleThemeSubmit}
    />
    <Infos openInfos={openInfos} setOpenInfos={setOpenInfos}/>



    
    </div>
    </ThemeProvider>
    </div>
    </body>
  );
}

export default App;
