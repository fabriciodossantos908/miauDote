import React, { useEffect } from 'react';
import { petStyle } from './styles';
import { Grid, CardMedia, Typography, Fab } from '@material-ui/core';
import { PetTab } from './petComp/';
import Axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
const background = require('../../images/background.jpg');

export default function PetList() {
  var pets = [];
  const classes = petStyle();
  // const test = navegator.geolocation.getCurrentPosition(success, error, PositionOptions);
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;

    console.log('Sua posição atual é:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('Mais ou menos ' + crd.accuracy + ' metros.');
  }

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div className={classes.root}>
      <CardMedia image={background}>
        {/* Introdução da página */}
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.typografy}>
              Essas fofurinhas estão esperando por você !
            </Typography>
          </Grid>

          {/* Corpo da tela de filtragem */}
          <Grid item container direction="column" className={classes.body}>
            {/* Barra de perquisa */}
            <Grid item container justify="center" alignContent="center"></Grid>

            {/* cards dos pets */}
            <Grid
              item
              container
              xs={12}
              justify="center"
              style={{ marginTop: 50 }}
            >
              <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
              </Fab>
              <PetTab pets={pets} />

              {/* <PetTab pets={pets} />
              <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab> */}
            </Grid>
          </Grid>
        </Grid>
      </CardMedia>
    </div>
  );
}
