import React from 'react';
import { Grid, CardMedia, Typography, Button } from '@material-ui/core';
import { useStyle } from '../../components/Layout/styles';
import { CardPets } from '../UserHome/compStyles';
import { palette } from '../../components/Layout/theme';

const maskPet = require('../../images/mask_pet.jpg');

export default function Home() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid
        container
        color="primary"
        direction="column"
        style={{ marginTop: -65 }}
      >
        <Grid
          item
          xs={12}
          justify="center"
          spacing={3}
          direction="row"
          style={{ display: 'flex', marginBottom: 40 }}
        >
          <CardMedia style={{ height: 500 }} image={maskPet}>
            <Grid item container xs={12} justify="flex-end">
              <Grid
                item
                container
                xs={6}
                justify="center"
                direction="row"
                style={{ paddingTop: 100 }}
                className={classes.grid}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    marginLeft: 10,
                    color: palette.primary.contrastText,
                  }}
                >
                  <Typography
                    variant="h4"
                    align="center"
                    style={{ fontWeight: 'bold' }}
                  >
                    O que você deve saber
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ color: palette.primary.dark }}>
                  <Typography
                    variant="h4"
                    align="center"
                    style={{ fontWeight: 'bold' }}
                  >
                    antes de adotar um animal
                  </Typography>
                </Grid>
                <Typography
                  variant="h6"
                  align="left"
                  style={{
                    fontWeight: 'bold',
                    color: palette.primary.contrastText,
                  }}
                >
                  Verifique as informações do pet antes de adotar
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: 'bold',
                    color: palette.primary.contrastText,
                  }}
                >
                  Antes de adotar, pense no pet
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: 'bold',
                    color: palette.primary.contrastText,
                  }}
                >
                  que se sentiria bem no espaço de sua casa
                </Typography>

                <Grid item xs={12} style={{ marginTop: 30 }}>
                  <Button>Ver lista de pets</Button>
                </Grid>
                <a
                  href="https://www.freepik.com/photos/woman"
                  style={{
                    textDecoration: 'none',
                    marginTop: 50,
                    marginLeft: 200,
                    fontSize: 10,
                    color: palette.secondary.dark,
                  }}
                >
                  Woman photo created by user18526052 - www.freepik.com
                </a>
              </Grid>
            </Grid>
          </CardMedia>
        </Grid>
        <Grid
          item
          xs={12}
          justify="center"
          spacing={3}
          direction="row"
          style={{ display: 'flex' }}
        >
          <CardPets />
        </Grid>
      </Grid>
    </div>
  );
}
