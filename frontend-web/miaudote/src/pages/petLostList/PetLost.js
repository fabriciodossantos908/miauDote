import React from 'react';
import { petStyle } from './styles';
import {
  Grid,
  CardMedia,
  Typography,
  Fab,
  Modal,
  Fade,
  Button,
  makeStyles,
} from '@material-ui/core';
import { PetTab } from './petComp';
import AddIcon from '@material-ui/icons/Add';

import CheckoutLostPet from '../../components/PetSignUp/typeRegister/CheckoutLostPet';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useStyle } from '../../components/Layout/styles';

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

function LostPet(props) {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
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
        className={classes.modal}
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
          <div className={classes.paper}>
            <Button onClick={handleClose} style={{ marginLeft: 400 }}>
              <CloseRoundedIcon />
            </Button>
            <CheckoutLostPet />
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}

export default function PetLost() {
  var pets = [];
  const classes = petStyle();
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
            <Grid item container justify="center" alignContent="center">
              {/* <SearchBar /> */}
            </Grid>

            {/* cards dos pets */}
            <Grid
              item
              container
              xs={12}
              justify="center"
              style={{ marginTop: 50 }}
            >
              <LostPet />
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
