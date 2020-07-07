import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography } from '@material-ui/core'
import { useStyles } from './styles';

import { theme } from '../Layout/styles'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
  const classes = useStyles();


  return (
    <Grid container >
      <Grid item container xs={12} className={classes.container}
      direction="row">
        <Grid item xs={3} className={classes.logo}>
          <Grid item >
              <Typography
              variant="h2"
              className={classes.logoTitle}
              >
                Miaudote
              </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={2} className={classes.base} direction="column">
          <Typography variant="h5" className={classes.title}>Inicio</Typography>
          <Typography variant="h6" className={classes.subTitle}>Home</Typography>
          <Typography variant="h6" className={classes.subTitle}>Pets</Typography>
          <Typography variant="h6" className={classes.subTitle}>Download App</Typography>
        </Grid>
        <Grid item container xs={3} className={classes.base} direction="column">
          <Typography variant="h5" className={classes.title}>Sobre-nós</Typography>
          <Typography variant="h6" className={classes.subTitle}>Informações da empresa</Typography>
          <Typography variant="h6" className={classes.subTitle}>Contato</Typography>
        </Grid>
        <Grid item container xs={2} className={classes.base} direction="column">
          <Typography variant="h5" className={classes.title}>Suporte</Typography>
          <Typography variant="h6" className={classes.subTitle}>FAQ</Typography>
          <Typography variant="h6" className={classes.subTitle}>Telefones</Typography>
          <Typography variant="h6" className={classes.subTitle}>Chat</Typography>
        </Grid>
        <Grid item xs={2} className={classes.base}>
          <FacebookIcon className={classes.icon} style={{ color: theme.palette.primary.light }} />
          <InstagramIcon className={classes.icon} style={{ color: theme.palette.primary.light }} />
      </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.footer} justify="center">
        <Grid item>
          <Typography variant="h5" className={classes.copy}>
             <p>2019 © - Todos direitos reservados.</p>
          </Typography>
          </Grid>
      </Grid>
    </Grid>
  );
}
