import React from 'react';
import { Grid, CardMedia, Typography, Button } from '@material-ui/core';
import { useStyle } from '../../components/Layout/styles';
import { CardPets } from '../UserHome/compStyles';
import { palette } from '../../components/Layout/theme';

const imageDog = require('../../images/petImg/dog/child_dog.jpg');

export default function Home() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid container color="primary" direction="column">
        <Grid
          item
          xs={12}
          justify="center"
          spacing={3}
          direction="row"
          style={{ display: 'flex', marginTop: 20, marginBottom: 40 }}
        >
          <Grid item xs={6}>
            <Grid
              item
              container
              justify="center"
              direction="row"
              style={{ borderTopLeftRadius: 40, borderBottomLeftRadius: 40 }}
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
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              direction="row"
              style={{ borderTopRightRadius: 40, borderBottomRightRadius: 40 }}
              className={classes.grid}
            >
              <Grid item xs={6}>
                <CardMedia className={classes.media} image={imageDog} />
              </Grid>
            </Grid>
          </Grid>
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
