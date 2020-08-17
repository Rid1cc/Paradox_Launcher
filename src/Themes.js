import * as React from 'react'

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControlLabel,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio

  } from '@material-ui/core'
  // const electron = window.require('electron')
  // const ipc = electron.ipcRenderer


  export const Themes = ({openThemes, setOpenThemes,handleChangeTheme,valueTheme, handleThemeSubmit}) => {
    return <Dialog
    open={openThemes}
    onClose={() => setOpenThemes(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth={"xs"}
    maxWidth={"xs"}
    >
    <form onSubmit={handleThemeSubmit}>
    <DialogTitle id="alert-dialog-title">{"Themes"}</DialogTitle>
    <DialogContent>
    
      <FormControl component="fieldset">
      <FormLabel component="legend" color="secondary" >Pick a theme</FormLabel>
      <RadioGroup aria-label="themes" name="theme" value={valueTheme} onChange={handleChangeTheme}>
        <FormControlLabel value='a' control={<Radio />} label="Castle's square (default)" />
        <FormControlLabel value='b' control={<Radio />} label="Aqua Magica" />
        <FormControlLabel value='c' control={<Radio />} label="Winter is coming" />
      </RadioGroup>
    </FormControl>

    </DialogContent>
    <DialogActions>
      <Button type="submit" onClick={() => {
        setOpenThemes(false)
        // ipc.send('saveTheme', {theme: valueTheme})
      }} color="secondary">
        Save
      </Button>
    
    </DialogActions>
    </form>
  </Dialog>}