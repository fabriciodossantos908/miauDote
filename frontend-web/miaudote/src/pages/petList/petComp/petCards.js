import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Modal,
  Fade,
  Paper,
  Divider,
} from '@material-ui/core';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { palette } from '../../../components/Layout/theme';
import Axios from 'axios';
import { Male, Female } from '../../../images/iconSex';

const sex = [
  <img src={Male} width="20" height="20" />,
  <img src={Female} width="20" height="20" />,
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  card: {
    width: '20vw',
    height: '45vh',
    borderRadius: 20,
  },
  media: {
    height: '25vh',
    borderRadius: '20 20 0 0 ',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: 0,
  },
  paper: {
    width: 450,
    height: 450,
    borderRadius: 20,
    backgroundColor: palette.background.paper,
  },
});

export default function PetTab() {
  const classes = useStyles();
  const [open, setOpen] = React.useState();
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
      window.addEventListener('load', console.log('this is useEffect return'));
    };
  }, []);

  const handleModal = (id, value) => {
    console.log(id);
    console.log(value);
    setOpen(8);
  };

  function handleCloseModal(event) {
    setOpen(false);
  }
  return (
    <Grid
      item
      xs={11}
      container
      spacing={3}
      justify="space-between"
      style={{ marginBottom: 20 }}
    >
      {pets.map((petData) => (
        <Grid item className={classes.root}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={petData.url_foto}
              title={petData.nome}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    name="checkedH"
                  />
                }
                style={{ marginLeft: '15vw' }}
              />
            </CardMedia>
            <CardContent>
              <Grid container justify="space-evenly" alignItems="center">
                <Grid item xs={12}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h6">
                        {petData.nome}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Grid>
                <Grid item container xs={12} direction="row">
                  <Grid item container xs={6} direction="row">
                    <Grid item>
                      <Typography gutterBottom variant="h8">
                        {petData.uf}
                      </Typography>
                      <Typography gutterBottom variant="h8">
                        -
                      </Typography>
                      <Typography gutterBottom variant="h8">
                        {petData.cidade}
                      </Typography>
                    </Grid>
                    <Grid item container xs={12} direction="row">
                      <Grid item>{petData.sexo === 'M' ? sex[0] : sex[1]}</Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  key={petData.id}
                  defaultValue={petData.id}
                  style={{ marginLeft: '65%' }}
                  variant="text"
                  onClick={() => {
                    setOpen(petData.id);
                  }}
                >
                  Ver mais
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  disablePortal={true}
                  id={petData.id}
                  className={classes.modal}
                  open={petData.id === open ? true : false}
                  onClose={handleCloseModal}
                  closeAfterTransition
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={petData.id === open ? true : false}>
                    <Paper className={classes.paper}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Button
                            onClick={handleCloseModal}
                            style={{ marginLeft: '85%', borderRadius: 20 }}
                          >
                            <CloseRoundedIcon />
                          </Button>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography variant="h4" align="center">
                            {petData.nome}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          justify="space-evenly"
                          alignItems="center"
                          direction="row"
                        >
                          <Grid item xs={4}>
                            <CardMedia
                              style={{ height: 250, borderRadius: 20 }}
                              image={petData.url_foto}
                              title={petData.nome}
                            ></CardMedia>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            container
                            justify="center"
                            direction="column"
                          >
                            {/* Desc pet section */}

                            <Grid item container direction="row">
                              <Grid item xs={12} sm={6}>
                                <Grid>
                                  <Typography variant="h6">Raça</Typography>
                                </Grid>

                                <Typography variant="h8">
                                  {petData.raca}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Grid>
                                  <Typography variant="h6">Sexo</Typography>
                                </Grid>

                                <Typography variant="h8">
                                  {petData.sexo}
                                </Typography>
                              </Grid>
                            </Grid>
                            {/* Addres section */}

                            <Grid item xs={12} sm={6}>
                              <Grid>
                                <Typography variant="h6">Cor</Typography>
                              </Grid>

                              <Typography variant="h8">
                                {petData.cor}
                              </Typography>
                            </Grid>

                            <Grid item container direction="row">
                              <Grid item xs={12} sm={6}>
                                <Grid>
                                  <Typography variant="h6">Estado</Typography>
                                </Grid>

                                <Typography variant="body1">
                                  {petData.uf}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Grid>
                                  <Typography variant="h6">Cidade</Typography>
                                </Grid>

                                <Typography variant="h8">
                                  {petData.cidade}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Grid>
                              <Typography variant="h6">Descrição</Typography>
                            </Grid>

                            <Typography variant="h8">
                              {petData.descricao}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Fade>
                </Modal>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
