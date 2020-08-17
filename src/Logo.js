import React from 'react';
import {Paper} from '@material-ui/core'
import './App.css'
import {useStyles} from './style'



export const Logo = () => {
    const classes = useStyles()
    return <h1 className={classes.h1}>
        <Paper>
          <div class={classes.logo}>
            Paradox Launcher
          </div>
        </Paper>  
      </h1>}