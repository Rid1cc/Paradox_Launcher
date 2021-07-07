import React from 'react';
import ReactPlayer from 'react-player'
import './App.css'
import { useStyles } from './style'

export const Vid = ({ vidVolume }) => {

    const classes = useStyles()
    return <ReactPlayer
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
    >
    </ReactPlayer>
}