import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { Cachorro, Cachorro2, Cachorro3 } from '../../../images/petImg/dog';

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
  media: {
    minWidth: 300,
    minHeight: 300,
    borderRadius: 20,
  },
});

const photo = require('../../../images/petImg/dog/Cachorro.jpg');

const pets = [
  {
    id: 0,
    nome: 'Tormenta',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    sexo: 'Macho',
  },
  {
    id: 1,
    nome: 'Buck',
    especie: 'Cachorro',
    raca: 'Golden',
    sexo: 'Macho',
  },
  {
    id: 2,
    nome: 'Dudy',
    especie: 'Cachorro',
    raca: 'Golden',
    sexo: 'Fêmea',
  },
  {
    id: 3,
    nome: 'Jhonny',
    especie: 'Cachorro',
    raca: 'Boxer',
    sexo: 'Macho',
  },
  {
    id: 4,
    nome: 'Teddy',
    especie: 'Cachorro',
    raca: 'York Shine',
    sexo: 'Macho',
  },
  {
    id: 5,
    nome: 'Pandora',
    especie: 'Cachorro',
    raca: 'Golden',
    sexo: 'Fêmea',
  },
  {
    id: 6,
    nome: 'Laica',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    sexo: 'Fêmea',
  },
  {
    id: 7,
    nome: 'Thor',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    sexo: 'Macho',
  },
  {
    id: 8,
    nome: 'Duda',
    especie: 'Cachorro',
    raca: 'Golden',
    sexo: 'Fêmea',
  },
];

export default function PetTab() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      style={{ marginBottom: 20 }}
    >
      {pets.map((petData, index) => (
        <Grid item className={classes.root}>
          <Card className={classes.media}>
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
                style={{ marginLeft: 250 }}
              />
              <CardActionArea style={{ width: '50%' }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                    {petData.nome}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent style={{ marginTop: 150 }}>
                <Grid
                  container
                  justify="space-evenly"
                  alignItems="center"
                  direction="center"
                >
                  <Grid>
                    <img
                      src={photo}
                      alt={petData.nome}
                      width="30"
                      height="30"
                      title="test"
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ textAlign: 'center' }}
                    >
                      {petData.raca}
                    </Typography>
                  </Grid>
                  <Grid>
                    <img
                      src={photo}
                      alt={petData.nome}
                      width="30"
                      height="30"
                      title="test"
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ textAlign: 'center' }}
                    >
                      {petData.sexo}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardMedia>

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
