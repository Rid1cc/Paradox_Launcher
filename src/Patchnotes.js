import * as React from 'react'

import {
    Button,
    Dialog,
    DialogContentText,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
  } from '@material-ui/core'

export const Patchnotes = ({openPatchnotes, setOpenPatchnotes}) => {
  return <Dialog
            open={openPatchnotes}
            onClose={() => setOpenPatchnotes(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth={"sm"}
            maxWidth={"sm"}
          >
          <DialogTitle id="alert-dialog-title">{"Patchnotes"}</DialogTitle>
          <DialogContent>
          <Typography variant="h3" component="h2">
            Version 0.0.1 alpha
          </Typography>
          <Typography variant="h5" component="h2">
            first alpha half-open release
          </Typography>
          <Typography variant="subtitle1" component="h2">
            - it works :D
          </Typography>

          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPatchnotes(false)} color="secondary">
              Back
            </Button>
          </DialogActions>
          </Dialog>
}