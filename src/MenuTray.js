import React from 'react';
import {Paper,} from '@material-ui/core'
import './App.css'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import {useStyles} from './style'
import ImageIcon from '@material-ui/icons/Image';
import {Settings} from './Settings';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const MenuTray = (setOpenSettings, setOpenThemes) => {
    const classes = useStyles()
    return <div className={classes.settings}>
    <Paper className={classes.settingsCanvas} onClick={() => setOpenSettings(true)}>
      <SettingsRoundedIcon color="secondary" className={classes.settingsIcon}/>   
    </Paper>
    <Paper className={classes.settingsCanvas} onClick={() => setOpenThemes(true)}>
      <ImageIcon color="secondary" className={classes.settingsIcon}/>   
    </Paper>
    <Paper className={classes.settingsCanvas} onClick={() => setOpenThemes(true)}>
      <HighlightOffIcon color="secondary" className={classes.settingsIcon}/>   
    </Paper>
    </div>

}