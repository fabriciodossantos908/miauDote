import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import { Cachorro, Cachorro2, Cachorro3 } from '../../../../images/petImg/dog';
import Axios from 'axios';
import { palette } from '../../../../components/Layout/theme';

const dogs = [Cachorro, Cachorro2, Cachorro3];

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
  },
  media: {
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentCard: {
    width: 300,
    height: 'inherit',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
}));

export default function PetTab() {
  const classes = useStyles();

  const [pets, setPets] = useState([]);
  useEffect(() => {
    window.addEventListener(
      'load',
      Axios.get('http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets/16')
        .then((result) => {
          const petsData = result.data;
          return setPets([petsData]);
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

  return (
    <Grid container spacing={3} justify="space-around">
      {pets.map((petData, index) => (
        <Grid item>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={petData.url_foto}
              title={petData.nome}
            >
              <CardActionArea className={classes.contentCard}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ color: palette.primary.contrastText }}
                  >
                    {petData.nome}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      marginTop: 50,
                      color: palette.primary.contrastText,
                    }}
                  >
                    {petData.descricao}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </CardMedia>

            <CardActions style={{ marginTop: 10 }}>
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
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
