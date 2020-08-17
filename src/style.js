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
      paddingTop: '4vh',
      paddingBottom: '3vh',
      paddingLeft:'1vw',
      paddingRight:'1vw',
    },
    button: {
      position: 'absolute',
      backgroundColor: 'red',
      right: 0
    },
    h1: {
      marginTop: '1vw',
      textAlign: 'center',
      fontSize: '3vw'
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
      flexGrow: '5',
      padding: '1vw',
      transition: 'right 300ms',
      

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
      verticalAlign: 'middle'
    },
    settingsInside: {
      display: 'table',
    }
  
  })
