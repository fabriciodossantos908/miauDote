import React from 'react';
import { Grid, Divider, Paper, Typography, Button } from '@material-ui/core';
import { TabsProfile, IconPerfil } from './compModel';
import { profile } from '../../../components/Layout/styles';
import { palette } from '../../../components/Layout/theme';
import FormUserPhoto from '../../../components/signUp/CheckoutUser/FormUser/FormUserPhoto';

export default function UserProfile() {
  const classesProfile = profile();

  const profilePhoto = localStorage.getItem('photo');

  const user = localStorage.getItem('user');

  return (
    <fragment>
      <Grid container>
        <Paper
          className={classesProfile.UserDescription}
          style={{
            marginTop: -65,
            paddingTop: 100,
            backgroundColor: palette.secondary.light,
          }}
          square
        >
          <Grid container spacing={3} justify="center" direction="row">
            <Grid item xs={2}>
              <IconPerfil profilePhoto={profilePhoto} />
              <FormUserPhoto />
            </Grid>

            <Grid item xs={6}>
              <Typography
                variant="h3"
                style={{ color: palette.primary.contrastText }}
              >
                Olá {user}
              </Typography>

              <Grid item container spacing={3}>
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
    </fragment>
  );
}
