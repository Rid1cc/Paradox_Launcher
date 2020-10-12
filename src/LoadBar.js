import React from 'react';
import {LinearProgress,} from '@material-ui/core'
import './App.css'
import {useStyles} from './style'
const electron = window.require('electron')
const ipc = electron.ipcRenderer


export const LoadBar = () => {

    const [progress, setProgress] = React.useState(0);

    
      
    
    
    React.useEffect(() => {
        ipc.on('loadingStart', () => {
            const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
            }, 800);
        
            return () => {
            clearInterval(timer);
            };
        });
      }, []);

  

    const classes = useStyles()
    return <div className={classes.loadBar}>
        <LinearProgress variant="determinate" value={progress} color="secondary" />
    </div>
}