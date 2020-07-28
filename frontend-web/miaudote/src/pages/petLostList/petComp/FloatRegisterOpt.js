import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { Typography, Button, Menu, MenuItem } from '@material-ui/core';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import CheckoutPet from '../../components/PetSignUp/typeRegister/CheckoutPet';
import CheckoutLostPet from '../../components/PetSignUp/typeRegister/CheckoutLostPet';

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

export function AdoptionPet(props) {
  const classes = props.classes;
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="text">
        Quer doar um pet?
      </Button>
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
            <CheckoutPet />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export function LostPet(props) {
  const classes = props.classes;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen} variant="text">
        Perdeu seu pet?
      </Button>
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
    </div>
  );
}

export default function Test() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h4">
        The Pet register modal right under here.
      </Typography>
      <AdoptionPet classes={classes} />
      <LostPet classes={classes} />
    </React.Fragment>
  );
}
