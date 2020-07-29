import React, { useEffect } from 'react';
import { petStyle } from './styles';
import {
  Grid,
  CardMedia,
  Typography,
  Fab,
  Modal,
  Button,
  Fade,
  makeStyles,
} from '@material-ui/core';
import { PetTab } from './petComp/';
import Axios from 'axios';
import AddIcon from '@material-ui/icons/Add';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import CheckoutPet from '../../components/PetSignUp/typeRegister/CheckoutPet';
import { palette } from '../../components/Layout/theme';

const background = require('../../images/background.jpg');

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
  },
  paper: {
    width: 550,
    height: 550,
    borderRadius: 20,
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function AdoptionPet(props) {
  const classes = petStyle();
  const classesMain = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleOpen}
        className={classes.fab}
        style={{
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
          backgroundColor: palette.primary.main,
        }}
      >
        <AddIcon />
      </Fab>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        disablePortal
        disableEnforceFocus
        className={classesMain.modal}
        open={open}
        onClose={handleClose}
        disableBackdropClick
        closeAfterTransition
        // BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classesMain.paper}>
            <Button onClick={handleClose} style={{ marginLeft: 400 }}>
              <CloseRoundedIcon />
            </Button>
            <CheckoutPet />
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}

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

    // console.log('Sua posição atual é:');
    // console.log('Latitude : ' + crd.latitude);
    // console.log('Longitude: ' + crd.longitude);
    // console.log('Mais ou menos ' + crd.accuracy + ' metros.');
  }

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  return (
    <div className={classes.root}>
      <CardMedia
        image={background}
        style={{ marginTop: -100, paddingTop: 100 }}
      >
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
              <AdoptionPet petStyle={classes} />
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
