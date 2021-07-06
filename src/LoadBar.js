import React from 'react';
import { LinearProgress, } from '@material-ui/core'
import './App.css'
import { useStyles } from './style'

const electron = window.require('electron')
const ipc = electron.ipcRenderer


export const LoadBar = () => {

    const [progress, setProgress] = React.useState(0);
    const [mode, setMode] = React.useState('determinate')

    ipc.on('loading', () => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));

        if (ipc.on('starting')) {
            setProgress(0);
        }
    }, []);
    ipc.on('starting', () => {
        setMode('indeterminate');
        setProgress(0);
    });
    ipc.on('closed', () => {
        setMode('determinate');
        setProgress(0);
    });

    const classes = useStyles()

    return <div className={classes.loadBar}>

        <LinearProgress variant={mode} value={progress} color="secondary" />

    </div>
}