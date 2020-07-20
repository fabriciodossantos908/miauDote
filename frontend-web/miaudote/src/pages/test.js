import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Typography, Button } from '@material-ui/core';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import CheckoutPet from '../components/PetSignUp/CheckoutPet'

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

export default function Test() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Typography
        variant="h4"
      >
        The  Pet register modal right under here.
    </Typography>
      <div>
        <Button 
        type="button" 
        onClick={handleOpen}
        variant="outlined"
        >
          Cadastrar pet
      </Button>
        <Modal
          // aria-labelledby="transition-modal-title"
          // aria-describedby="transition-modal-description"
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
              <Button onClick={handleClose} style={{marginLeft: 400}}>
                <CloseRoundedIcon />
              </Button>
              <CheckoutPet />
            </div>
          </Fade>
        </Modal>
      </div>
    </React.Fragment>

  );
}
