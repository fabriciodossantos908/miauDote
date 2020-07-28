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
import {
  Cachorro,
  Cachorro2,
  Cachorro3,
  Dog_boxer,
} from '../../../images/petImg/dog';
import { Grid } from '@material-ui/core';

const test = require('../../../images/petImg/cat.jpg');

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: 200,
    maxWidth: 400,
    height: 300,
  },
  root: {
    minWidth: 200,
    maxWidth: 345,
    bottom: 20,
    margin: theme.spacing(1),
  },
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

const dogs = [
  Cachorro,
  Cachorro2,
  Cachorro3,
  Dog_boxer,
  Cachorro2,
  Cachorro3,
  Cachorro,
  Cachorro3,
  Cachorro,
];

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    window.addEventListener(
      'load',
      Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets')
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
      // window.addEventListener("load", console.log("this is useEffect return"))
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {pets.map((petData, index) => (
        <Grid item className={classes.container}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Ops! não encotramos a imagem desse pet"
                height="140"
                image={petData.url_foto}
                title="Ops! não encotramos a imagem desse pet"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {petData.nome}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {petData.descricao}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Pesquisar
              </Button>
              <div>
                <Button size="small" onClick={handleOpen}>
                  Saber mais
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <h2 id="transition-modal-title">Transition modal</h2>
                      <p id="transition-modal-description">
                        react-transition-group animates me.
                      </p>
                    </div>
                  </Fade>
                </Modal>
              </div>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
}
