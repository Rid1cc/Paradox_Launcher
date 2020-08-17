import React from 'react';
import {LinearProgress,} from '@material-ui/core'
import './App.css'
import {useStyles} from './style'


export const LoadBar = () => {
    const classes = useStyles()
    return <div className={classes.loadBar}>
        <LinearProgress color="secondary" />
    </div>
}