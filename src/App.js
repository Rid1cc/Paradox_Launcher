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
import { Paper } from '@material-ui/core'
import './App.css'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import { useStyles } from './style'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CardSection } from './CardSection';
import { Infos } from './Infos'
import { Patchnotes } from './Patchnotes'
import { Settings } from './Settings'
import { Error } from './Error'
import { LoginPanel } from './LoginPanel'
import ImageIcon from '@material-ui/icons/Image';
import { Themes } from './Themes'
import { Logo } from './Logo'
import { LoadBar } from './LoadBar'
import CancelIcon from '@material-ui/icons/Cancel';
import ReactPlayer from 'react-player'
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { useDebouncedCallback } from 'use-debounce';
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
  const [openPatchnotes, setOpenPatchnotes] = React.useState(false)
  const [openSettings, setOpenSettings] = React.useState(false)
  const [openThemes, setOpenThemes] = React.useState(false)
  const [isPremium, setIsPremium] = React.useState(true)
  const [valueTheme, setValueTheme] = React.useState('');
  const [openVersions, setOpenVersions] = React.useState(false);
  const [mcVersions, setMcVersions] = React.useState('1.15.2');
  const classes = useStyles()
  const [color, setColor] = React.useState('#f50057');
  const [minRam, setMinRam] = React.useState('4000');
  const [maxRam, setMaxRam] = React.useState('6000');
  const [vidVolume, setVidVolume] = React.useState(0.5);

  const handleDebouncedVolumeChange = useDebouncedCallback((volume) => {
    setVidVolume(volume)
  }, 100)


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
    } else if (valueTheme === 'b') {
      setColor('#4db6ac');
    } else {
      setColor('#43a047');
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
    ipc.send('logIn', { user, pass, minRam, maxRam, mcVersions });
    ipc.send('memory', { minRam, maxRam });
  }
  ipc.send('saveTheme', { theme: valueTheme })



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
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: '3px solid #404040',
        borderRadius: '3px'
      }}>

        <ReactPlayer
          width='120%'
          height='120%'
          volume={vidVolume}
          className={classes.overVid}
          url={'https://www.youtube.com/watch?v=MLAjUatpzoM'}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                playlist: 'MLAjUatpzoM',
                loop: 1,
                controls: 0,
                fs: 0,
              },
            },
          }}
        />
        <ThemeProvider theme={darkTheme}>
          <div className={classes.root}>

            {/* LOGO CAPTION */}
            <Logo />

            {/* LOAD BAR */}
            <LoadBar />

            {/* CARD SECTION */}
            <CardSection setOpenInfos={setOpenInfos} setOpenPatchnotes={setOpenPatchnotes} />

            {/* CORNER LEFT MENU */}
            <div className={classes.settings}>
              <Paper className={classes.settingsCanvas} onClick={() => window.close()}>
                <CancelIcon color="secondary" className={classes.settingsIcon} />
              </Paper>
              <Paper className={classes.settingsCanvas} onClick={() => setOpenSettings(true)}>
                <SettingsRoundedIcon color="secondary" className={classes.settingsIcon} />
              </Paper>
              <Paper className={classes.settingsCanvas} onClick={() => setOpenThemes(true)}>
                <ImageIcon color="secondary" className={classes.settingsIcon} />
              </Paper>
              <Paper className={classes.settingsCanvasSlider}>
                <VolumeUp color='secondary' className={classes.settingsIcon} />
                <Slider
                  className={classes.vidSlider}
                  defaultValue={vidVolume * 100}
                  valueLabelDisplay="auto"
                  onChange={(event, value) => handleDebouncedVolumeChange(value / 100)}
                  step={1}
                  min={0}
                  max={100}
                  color='secondary'
                />
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
            <Error openError={openError} setOpenError={setOpenError} />
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
            <Infos openInfos={openInfos} setOpenInfos={setOpenInfos} />
            <Patchnotes openPatchnotes={openPatchnotes} setOpenPatchnotes={setOpenPatchnotes} />




          </div>
        </ThemeProvider>
      </div>
    </body>
  );
}

export default App;
