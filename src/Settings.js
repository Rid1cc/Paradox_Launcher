import * as React from 'react'
import {useStyles} from './style'
import {FormControl, Select, InputLabel, MenuItem} from '@material-ui/core'
import {
    Button,
    Dialog,
    DialogContentText,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
  } from '@material-ui/core'

  export const Settings = ({
    openSettings, 
    setOpenSettings, 
    openVersions, 
    handleCloseVersions,
    handleOpenVersions,
    mcVersions,
    handleChangeVersions,
    minRam,
    handleChangeMinRam,
    maxRam,
    handleChangeMaxRam
  }) => {
    const classes = useStyles()
    return <Dialog
    open={openSettings}
    onClose={() => setOpenSettings(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth={"xs"}
    maxWidth={"xs"}
    >
    <DialogTitle id="alert-dialog-title">{"Settings"}</DialogTitle>
    <DialogContent color="secondary">
      <DialogContentText id="alert-dialog-description" >
        {/*INSIDE*/}
        <FormControl className={classes.settingsInside} color='secondary'>
        {/* <InputLabel>Version</InputLabel>
        <Select
          open={openVersions}
          onClose={handleCloseVersions}
          onOpen={handleOpenVersions}
          value={mcVersions}
          onChange={handleChangeVersions}
          displayValue={'1.15.2'}
        >
          <MenuItem value="1.16">
            <em>1.16</em>
          </MenuItem>
          <MenuItem value={'1.15.2'}>1.15.2</MenuItem>
          <MenuItem value={'1.14.4'}>1.14.4</MenuItem>
          <MenuItem value={'1.12.2'}>1.12.2</MenuItem>
          <MenuItem value={'1.8'}>1.8</MenuItem>
          <MenuItem value={'1.7.10'}>1.7.10</MenuItem>
          <MenuItem value={'1.6.4'}>1.6.4</MenuItem>
        </Select> */}
        <TextField 
          className={classes.elementSettings}
          color="secondary"
          id="standard-multiline-flexible"
          label="Version"
          value={mcVersions}
          onChange={handleChangeVersions}
          
        />
        <TextField 
          className={classes.elementSettings}
          color="secondary"
          id="standard-multiline-flexible"
          label="Minimum Ram (MB)"
          value={minRam}
          onChange={handleChangeMinRam}
          
        />
      <TextField
          className={classes.elementSettings}
          color = "secondary"
          id="standard-multiline-flexible"
          label="Maximum Ram (MB)"
          value={maxRam}
          onChange={handleChangeMaxRam}
        />
      </FormControl>
        {/*END*/}
      </DialogContentText>
  
    </DialogContent>
    <DialogActions>
      <Button type="submit" onClick={() => setOpenSettings(false)} color="secondary">
        Save
      </Button>
    </DialogActions>
  </Dialog>}