import * as React from 'react'
import {useStyles} from './style'
import {
    Button,
    Card,
    Typography,
    CardActions,
    CardActionArea,
    CardMedia,
    CardContent,
  } from '@material-ui/core'


export const CardSection = ({setOpenInfos}) => {
    const classes = useStyles()
    return <div className={classes.cardSection}>
    <Card /*DISCORD*/ className={classes.disCard} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.dropbox.com/s/iirjbabdn6epd83/cardFront.png?dl=1"
                  title="Ridiccownia"
                />
              <CardContent >
                <Typography 
                gutterBottom 
                variant="h5" 
                component="h2" 
                className={classes.mainContentFormat}
                >
                  Discord
                </Typography>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" 
                className={classes.underContentFormat}
                >
                  Join our discord and feel more socialized.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                size="small" 
                color="secondary" 
                onClick={
                  event => {window.open('https://discord.com/invite/U52rS2C'
                  )}} 
                  className={classes.cardButton}
                  >
                  Join
                </Button>
              </CardActions>
            </Card>
            <Card /*PATCHES*/ className={classes.patchCard}  >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.dropbox.com/s/htyx4xjohh037x7/patch.png?dl=1"
                  title="Patchnotes"
                />
              <CardContent >
                <Typography 
                gutterBottom 
                variant="h5" 
                component="h2" 
                className={classes.mainContentFormat}
                >
                  Patchnotes
                </Typography>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" 
                className={classes.underContentFormat}
                >
                  Newest version changes and bugfixes
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                size="small" 
                color="secondary" 
                onClick={
                  () => {window.open('https://discord.com/invite/U52rS2C'
                  )}} 
                  className={classes.cardButton}
                  >
                  Read
                </Button>
              </CardActions>
            </Card>
            <Card /*PROPS*/ className={classes.propCard} >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.dropbox.com/s/2nib0b260pgd0cg/code-1839406.jpg?dl=1"
                  title="Credits"
                />
              <CardContent >
                <Typography 
                gutterBottom 
                variant="h5" 
                component="h2" 
                className={classes.mainContentFormat}
                >
                  About us
                </Typography>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p" 
                className={classes.underContentFormat}
                >
                  More info about people that make server and devs of launcher
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                size="small" 
                color="secondary" 
                onClick={
                  () => setOpenInfos(true)} 
                  className={classes.cardButton}
                  >
                  Check out
                </Button>
              </CardActions>
            </Card>
            </div>
}