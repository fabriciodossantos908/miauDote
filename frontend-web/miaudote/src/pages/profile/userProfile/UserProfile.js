import React from 'react';
import { Grid, Divider, Paper, Typography, Button } from '@material-ui/core';
import { TabsProfile, IconPerfil } from './compModel';
import { profile, theme } from '../../../components/Layout/styles';

const profilePhoto = require('../../../images/fabricio.jpg');

export default function UserProfile() {
  const classesProfile = profile();

  return (
    <React.Fragment>
      <Grid container>
        <Paper
          className={classesProfile.UserDescription}
          style={{ backgroundColor: theme.palette.primary.light }}
          square
        >
          <Grid container spacing={3} justify="center" direction="row">
            <Grid item xs={2}>
              <IconPerfil profilePhoto={profilePhoto} />
            </Grid>

            <Grid item xs={4}>
              <Typography variant="h3">Davi Soares</Typography>

              <Grid container spacing={3}>
                <Grid item>
                  <Typography>0 pets</Typography>
                </Grid>
                <Grid item>
                  <Typography>0 favoritos</Typography>
                </Grid>
                <Grid item>
                  <Typography>0 pets encontrados</Typography>
                </Grid>
              </Grid>

              <Button>Editar perfil</Button>
            </Grid>
          </Grid>
        </Paper>
        <Divider />
        <TabsProfile />
      </Grid>
    </React.Fragment>
  );
}
