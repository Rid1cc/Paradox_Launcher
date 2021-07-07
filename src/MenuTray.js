import React from 'react';
import { Paper } from '@material-ui/core'
import './App.css'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import { useStyles } from './style'
import ImageIcon from '@material-ui/icons/Image';
import CancelIcon from '@material-ui/icons/Cancel';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
export const MenuTray = ({setOpenSettings, setOpenThemes, muteVisible, setMuteVisible, vidVolume, handleDebouncedVolumeChange}) => {
    const classes = useStyles()
    return <div className={classes.settings}>
    
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
                {muteVisible === 'no' && (
                  <VolumeUp color='secondary' className={classes.settingsIcon} onClick={() => setMuteVisible('yes')} />
                )}

                {muteVisible === 'yes' && (
                  <VolumeOffIcon color='secondary' className={classes.settingsIcon} onClick={() => setMuteVisible('no')} />
                )}
                <Slider
                  className={classes.vidSlider}
                  defaultValue={vidVolume * 100}
                  valueLabelDisplay="auto"
                  onChange={(value) => handleDebouncedVolumeChange(value / 100)}
                  step={1}
                  min={0}
                  max={100}
                  color='secondary'
                />
              </Paper>
            </div>

    </div>

}