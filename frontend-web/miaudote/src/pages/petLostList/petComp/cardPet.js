import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 200,
    maxWidth: 700,
    minHeight: 300,
    height: 'auto',
  },
  //   root: {
  //     minWidth: 200,
  //     maxWidth: 345,
  //     bottom: 20,
  //     margin: theme.spacing(1),
  //   },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    window.addEventListener(
      'load',
      Axios.get(
        'http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets_perdidos',
      )
        .then((result) => {
          const petsData = result.data;
          return setPets(petsData);
        })
        .catch((err) => {
          console.log(err);
        }),
    );
    return () => {
      window.addEventListener('load', console.log('event of load'));
      window.addEventListener('load', console.log('this is useEffect return'));
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment className={classes.container}>
      {pets.map((petData) => (
        <Card>
          <CardActions>
            <div>
              <Button size="small" onClick={handleOpen}>
                Quero adotar
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={petData.id === open ? true : false}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={petData.id === open ? true : false}>
                  <div className={classes.paper}>
                    <h2 id="transition-modal-title">Entre em contato !</h2>
                    <Button size="small" onClick={handleClose}>
                      X
                    </Button>
                    <p id="transition-modal-description">
                      <CardActionArea>
                        <CardMedia
                          style={{ height: 250, borderRadius: 20 }}
                          component="img"
                          image={petData.url_foto}
                        />
                      </CardActionArea>
                    </p>
                  </div>
                </Fade>
              </Modal>
            </div>
          </CardActions>
        </Card>
      ))}
    </React.Fragment>
  );
}
