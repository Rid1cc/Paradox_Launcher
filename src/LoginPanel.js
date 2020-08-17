import React from 'react';
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  FormGroup,
  Paper,
} from '@material-ui/core'
import './App.css'
import {useStyles} from './style'

export const LoginPanel = ({
     user,
     setUser, 
     pass, 
     setPass, 
     isPremium,
     setIsPremium,
     handleUserChange,
     handlePremiumChange,
     handleClick
    }) => {
    const classes = useStyles()
return <form > 
    <Paper className={classes.loginPanel}>
    <FormGroup className={classes.slider}>
    <FormControlLabel
      control={<Switch size='large' checked={isPremium} onChange={handlePremiumChange} />}
      labelPlacement="start"
      color="secondary"
      label="Premium account"
      className={classes.fonting}
    />
    </FormGroup>
    <TextField
      style={{marginRight: '0.5vw',}}
      className={classes.input} 
      label="Username" 
      variant="outlined" 
      color="secondary" 
      onChange={handleUserChange} 
      value={user} 
    />
    <TextField 
      style={{marginRight: '0.5vw',}}
      className={classes.input}
      disabled={!isPremium} 
      type="password"
      label="Password" 
      variant="outlined" 
      color="secondary" 
      onChange={event => setPass(event.target.value)} 
      value={pass} 
    />
    <Button variant="contained" color="secondary" onClick={handleClick} >PLAY</Button>
    </Paper>
    </form>}