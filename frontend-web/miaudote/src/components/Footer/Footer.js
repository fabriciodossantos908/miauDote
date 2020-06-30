import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './styles';

const logoN = require('../../images/logoN.jpg')


export default function Footer() {
  const classes = useStyles();


  return (
    <Grid container className={classes.root}>
      <Grid item container xs={12} className={classes.container}
      direction="row">
        <Grid item xs={3} className={classes.logo}>
          <Grid item xs={10} className={classes.imgLogo}>
            
          </Grid>
        </Grid>
        <Grid item container xs={2} className={classes.base} direction="column">
          <Typography variant="h5" className={classes.title}>Inicio</Typography>
          <Typography variant="h8" className={classes.subTitle}>Home</Typography>
          <Typography variant="h8" className={classes.subTitle}>Pets</Typography>
          <Typography variant="h8" className={classes.subTitle}>Download App</Typography>
        </Grid>
        <Grid item container xs={3} className={classes.base} direction="column">
          <Typography variant="h5" className={classes.title}>Sobre-nós</Typography>
          <Typography variant="h8" className={classes.subTitle}>Informações da empresa</Typography>
          <Typography variant="h8" className={classes.subTitle}>Contato</Typography>
        </Grid>
        <Grid item container xs={2} className={classes.base} direction="column">
          <Typography variant="h5" className={classes.title}>Suporte</Typography>
          <Typography variant="h8" className={classes.subTitle}>FAQ</Typography>
          <Typography variant="h8" className={classes.subTitle}>Telefones</Typography>
          <Typography variant="h8" className={classes.subTitle}>Chat</Typography>
        </Grid>
        <Grid item xs={2} className={classes.base} direction="row">
        <div className={classes.avatar}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard"/>
          <Avatar alt="Cindy Baker" />
        </div>
      </Grid>
      </Grid>
      <Grid item xs={12} className={classes.footer}>
          <Typography variant="h5" className={classes.copy}>
             <p>2019 © - Todos direitos reservados.</p>
          </Typography>
      </Grid>
    </Grid>
  );
}
