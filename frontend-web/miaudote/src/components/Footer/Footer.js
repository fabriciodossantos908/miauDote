import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography, CardMedia } from '@material-ui/core'
import { useStyles } from './styles';

import { theme } from '../Layout/styles'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const logo = require("../../images/logoN.jpg")

export default function Footer() {
  const classes = useStyles();


  return (
    <Grid container style={{backgroundColor: "#f3f3f3"}}>
      <Grid item container xs={12} style={{height: 200, marginTop: 50}} direction="row">
        <Grid item xs={3}>
          <CardMedia
            className={classes.media}
            image={logo}
          />
        </Grid>
        <Grid item container xs={2} direction="column">
          <Typography variant="h5" className={classes.text}>Inicio</Typography>
          <Typography className={classes.text}>Home</Typography>
          <Typography className={classes.text}>Pets</Typography>
          <Typography className={classes.text}>Download App</Typography>
        </Grid>
        <Grid item container xs={3} direction="column">
          <Typography variant="h5" className={classes.text}>Sobre-nós</Typography>
          <Typography className={classes.text}>Informações da empresa</Typography>
          <Typography className={classes.text}>Contato</Typography>
        </Grid>
        <Grid item container xs={2} direction="column">
          <Typography variant="h5" className={classes.text}>Suporte</Typography>
          <Typography className={classes.text}>FAQ</Typography>
          <Typography className={classes.text}>Telefones</Typography>
          <Typography className={classes.text}>Chat</Typography>
        </Grid>
        <Grid item xs={2} className={classes.base}>
          <FacebookIcon className={classes.icon} />
          <InstagramIcon className={classes.icon} />
        </Grid>
      </Grid>
      <Grid item container justify="center" style={{height: 150, backgroundColor: theme.palette.secondary.light}}>
        <Grid item container alignItems="center" direction="column" style={{height: 60, marginTop: 40}}>
          <Grid item alignItems="center">
            <Typography className={classes.fontCopy}>
              Termos de Uso e Políticas de privacidade
            </Typography>
          </Grid>
          <Grid item alignItems="center">
            <Typography className={classes.fontCopy}>
              MiauDote Copyright ©2020   
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
