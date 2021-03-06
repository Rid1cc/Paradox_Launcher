import {
    makeStyles
  } from '@material-ui/core'

export const useStyles = makeStyles({
    Background: {
      
    },
    root: {
      fontFamily: "'Farsan', cursive",
      position: 'relative',
      height: '95vh',
      paddingTop: '3vh',
      paddingBottom: '4vh',
      paddingLeft:'1vw',
      paddingRight:'1vw',
    },
    overVid: {
      position: 'absolute',
      top: '-10%',
      width: '120%',
      height: '120%',
      right: '-10%',
      zIndex: '-100',
      border: '3px solid #404040',
      borderRadius: '3px'
    },
    button: {
      position: 'absolute',
      backgroundColor: 'red',
      right: 0
    },
    versionInfo:{
      marginTop: '-3vh',
      paddingBottom: '1vh',
      fontSize: '1vw'
    },
    h1: {
      marginTop: '-2vh',
      textAlign: 'center',
      fontSize: '3vw',
      WebkitAppRegion: 'drag',
      
    },
    input: {
      marginRight: '20px'
    },
    slider: {
      marginRight: '1em',
      padding: '0.5vw'
    },
    loginPanel: {
      position: 'absolute',
      bottom: 0,
      right: '1vw',
      display: 'inline-flex',
      padding: '1vw',
      marginBottom: '4vh',

    },
    fonting:{
      fontFamily: "'Farsan', cursive",
    },
    logo: {
      padding: '1vw',
      color: 'white'
    },
    media: {
      height: '10vw',
    },
    disCard: {
      maxWidth: '18vw',
      flexGrow: '2',
      marginRight: '2vw',
    },
    patchCard:{
      Width: '60vw',
      flexGrow: '4',
      marginRight: '2vw',
  
    },
    mainContentFormat: {
      fontFamily: "'Farsan', cursive",
      fontSize: '2vw'
    },
    underContentFormat: {
      fontFamily: "'Farsan', cursive",
      fontSize: '1.5vw'
    },
    cardButton: {
      fontFamily: "'Farsan', cursive",
    },
    cardSection: {
      display: 'flex',
      flexBasis: '100vw',
      marginTop: '5vw'
    },
    formControl: {
      minWidth: 120,
    },
    propCard: {
      maxWidth: '18vw',
    },
    loadBar:{
      width: '100%',
      position: 'sticky',
      bottom: '-0.5vw',
      marginTop: '-2.25vw'
    },
    settings: {
        position: 'absolute',
        bottom: 0,
        left: '1vw',
        display: 'flex',
        marginBottom: '4vh',
    
    },
    hoovArrow: {
      padding: '1vw',
      transform: 'rotate(180deg)'

    },
    settingsCanvas:{
      marginRight: '0.5vw',
      padding: '0.5vw',
    },
    
    settingsIcon: {
      fontAlign: 'center',
      fontSize: '10',
      verticalAlign: 'middle',
      
    },
    volumeIcon: {
      marginTop: '0.5vw',
      marginLeft:'0.5vw',
    },
    volumeSlider: {
      marginLeft:'0.5vw',
      width: '5vw',
      color: 'secondary',
    },
    settingsInside: {
      position: 'relative',
      display: 'flex',
      flexBasis: '1vw',
      
    },
    elementSettings: {
      textAlign: 'center',
      margin: '0.5vw',
      paddingleft: '3vw',
      paddingright: '3vw',
    }
  
  })
