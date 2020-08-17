import * as React from 'react'

import {
    Button,
    Dialog,
    DialogContentText,
    DialogTitle,
    DialogContent,
    DialogActions
  } from '@material-ui/core'

 export const Error = ({openError, setOpenError}) => { 
  
  return <Dialog
  open={openError}
  onClose={() => setOpenError(false)}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
  >
  <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Password/Login Error
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenError(false)} color="primary">
      Ok
    </Button>
  </DialogActions>
</Dialog>}