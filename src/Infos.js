import * as React from 'react'

import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography
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
          <DialogTitle id="alert-dialog-title">{"Squad"}</DialogTitle>
          <DialogContent>
          <Typography variant="h5" component="h2">
            Quantum team:
          </Typography>
          <br/>
          
          <Typography variant="subtitle1" component="h2">
            Ridicc - main server, lore and launcher dev.
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Hexdark - server concept creator and structure builder.
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Oguraz - structure builder and lore dev.
          </Typography>
          <Typography variant="subtitle1" component="h2">
            Flarek - lore dev, quest writer.
          </Typography>
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography variant="subtitle2" component="h2">
           ~“Sometimes life hits you in the head with a brick. Don’t lose faith.” - Steve Jobs
          </Typography>
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography variant="subtitle2" component="h2">
           ~“we mi tu hogwart walnij” - Geneza The Outer Paradox
          </Typography>  
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenInfos(false)} color="secondary">
              Back
            </Button>
          </DialogActions>
          </Dialog>
}