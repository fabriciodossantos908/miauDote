import React from 'react';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './styles.js'
import {Typography} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';


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
        <Grid item xs={2} className={classes.base}>
          <h1 className={classes.title}>Inicio</h1>
          <h2 className={classes.subTitle}>Home</h2>
          <h2 className={classes.subTitle}>Pets</h2>
          <h2 className={classes.subTitle}>Download App</h2>
        </Grid>
        <Grid item xs={3} className={classes.base}>
          <h1 className={classes.title}>Sobre-nós</h1>
          <h2 className={classes.subTitle}>Informações da empresa</h2>
          <h2 className={classes.subTitle}>Contato</h2>
        </Grid>
        <Grid item xs={2} className={classes.base}>
          <h1 className={classes.title}>Suporte</h1>
          <h2 className={classes.subTitle}>FAQ</h2>
          <h2 className={classes.subTitle}>Telefones</h2>
          <h2 className={classes.subTitle}>Chat</h2>
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
          <Typography className={classes.copy}>
             <p>2019 © - Todos direitos reservados.</p>
          </Typography>
      </Grid>
    </Grid>
  );
}
