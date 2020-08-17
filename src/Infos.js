import * as React from 'react'

import {
    Button,
    Dialog,
    DialogContentText,
    DialogTitle,
    DialogContent,
    DialogActions
  } from '@material-ui/core'

export const Infos = ({openInfos, setOpenInfos}) => {
  return <Dialog
            open={openInfos}
            onClose={() => setOpenInfos(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={"sm"}
            maxWidth={"sm"}
          >
          <DialogTitle id="alert-dialog-title">{"Our Teams"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ustawienia
            </DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenInfos(false)} color="secondary">
              Back
            </Button>
          </DialogActions>
          </Dialog>
}