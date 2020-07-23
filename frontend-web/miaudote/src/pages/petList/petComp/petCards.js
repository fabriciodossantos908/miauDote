import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  ButtonBase,
  Button,
  Modal,
  Fade,
  Paper,
  Divider,
} from '@material-ui/core';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { Cachorro, Cachorro2, Cachorro3 } from '../../../images/petImg/dog';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import PetsIcon from '@material-ui/icons/Pets';
import ToysIcon from '@material-ui/icons/Toys';
import { palette } from '../../../components/Layout/theme';

// import FemaleIcon from '../../../images/icons/FemaleIcon.svg';

const dogs = [
  Cachorro,
  Cachorro2,
  Cachorro3,
  Cachorro,
  Cachorro2,
  Cachorro3,
  Cachorro,
  Cachorro3,
  Cachorro,
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
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
});

const photo = require('../../../images/petImg/dog/Cachorro.jpg');

const pets = [
  {
    id: 0,
    nome: 'Tormenta',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    cor: 'Pardo',
    sexo: 'Macho',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 1,
    nome: 'Buck',
    especie: 'Cachorro',
    raca: 'Golden',
    cor: 'Pardo',
    sexo: 'Macho',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 2,
    nome: 'Dudy',
    especie: 'Cachorro',
    raca: 'Golden',
    cor: 'Pardo',
    sexo: 'Fêmea',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 3,
    nome: 'Jhonny',
    especie: 'Cachorro',
    raca: 'Boxer',
    cor: 'Pardo',
    sexo: 'Macho',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 4,
    nome: 'Teddy',
    especie: 'Cachorro',
    raca: 'York Shine',
    cor: 'Pardo',
    sexo: 'Macho',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 5,
    nome: 'Pandora',
    especie: 'Cachorro',
    raca: 'Golden',
    cor: 'Pardo',
    sexo: 'Fêmea',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 6,
    nome: 'Laica',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    cor: 'Pardo',
    sexo: 'Fêmea',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 7,
    nome: 'Thor',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    cor: 'Pardo',
    sexo: 'Macho',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
  {
    id: 8,
    nome: 'Duda',
    especie: 'Cachorro',
    raca: 'Golden',
    cor: 'Pardo',
    sexo: 'Fêmea',
    idade: '2 anos',
    uf: 'SP',
    cidade: 'Osasco',
    descricao:
      'Ele sempre foi agitado mas amoroso consegue ser amosoro na mesma media, as vezes até demais.',
  },
];

export default function PetTab() {
  const classes = useStyles();
  const [open, setOpen] = React.useState();

  const focusedPet = pets[0].id;

  function handleModal(event) {
    // alert(event.target.id);
    setOpen(2);
  }
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
      {pets.map((petData, index) => (
        <Grid item className={classes.root}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={dogs[index]}
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
              {/* Section brief desc */}
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
                      <PetsIcon />
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h8">
                        {petData.raca}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item container xs={6} direction="row">
                    <Grid item>{/* <FemaleIcon /> */}</Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h8">
                        {petData.sexo}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {/* {console.log(petData.id)} */}
                <Button
                  key={petData.id}
                  id={petData.id}
                  name={'btn ' + index}
                  style={{ marginLeft: '65%' }}
                  variant="text"
                  onClick={handleModal}
                >
                  Ver mais
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  disablePortal={true}
                  className={classes.modal}
                  open={petData.id === open ? true : false}
                  onClose={handleCloseModal}
                  closeAfterTransition
                  // BackdropComponent={Backdrop}
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
                        <Divider
                          style={{ width: '100%', marginBottom: '1vh' }}
                        />
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
                              image={dogs[index]}
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

            {/* <CardActions style={{ marginTop: 10 }}>
                                <Grid container justify="space-evenly">
                                    <Grid>
                                <Button size="small" color="primary">
                                    Rotina
                                </Button>
                                </Grid>
                                <Grid>
                                <Button size="small" color="primary">
                                    Ver mais
                                </Button>
                                </Grid>
                                </Grid>
                            </CardActions> */}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
