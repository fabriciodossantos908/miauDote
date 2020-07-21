import React, { useEffect } from 'react';
import { mainHome, theme } from '../../components/Layout/styles';
import { Grid, CardMedia, Typography, Fade } from '@material-ui/core';

import CheckoutUserStep from '../../components/signUp/CheckoutUser/checkoutUserStep';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Dog_boxer } from '../../images/petImg/dog/index';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  base: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  icon: {
    width: 50,
    height: 50,
    color: theme.palette.primary.main,
  },
}));

function SocialIcon() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item>
        <InstagramIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <FacebookIcon className={classes.icon} />
      </Grid>
      <Grid item>
        <LinkedInIcon className={classes.icon} />
      </Grid>
    </React.Fragment>
  );
}

export default function InitialHome() {
  const classes = mainHome();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      'load',
      setChecked((prev) => !prev),
    );
    return () => {
      window.addEventListener(
        'load',
        setChecked((prev) => !prev),
      );
      // window.addEventListener("load", console.log("this is useEffect return"))
    };
  }, []);

  return (
    <Grid item container xs={12} className={classes.mainPaper}>
      <Grid item container direction="row">
        <Grid item xs={6} style={{ marginBottom: 50 }}>
          <Grid item xs={6}>
            <CardMedia
              image={Dog_boxer}
              alt="boxer dog"
              className={classes.descSide}
            >
              <Fade in={checked} timeout={1200}>
                <Grid
                  container
                  justify="center"
                  orientation="column"
                  className={classes.descContent}
                >
                  <Grid item xs={8}>
                    <Typography
                      variant="h4"
                      align="center"
                      style={{ color: 'white' }}
                    >
                      Seja bem vindo(a)
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="h4"
                      align="center"
                      style={{ color: 'white' }}
                    >
                      ao miaudote!!
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ color: 'white' }}
                    >
                      cadastre-se ou faça o login, para ter acesso a todas as
                      fofurinhas do nosso Brasil !!.
                    </Typography>
                  </Grid>
                </Grid>
              </Fade>
            </CardMedia>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <CheckoutUserStep />
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Grid item>
          <Typography
            variant="h4"
            style={{ color: theme.palette.primary.main }}
          >
            Redes Sociais
          </Typography>
        </Grid>
        <Grid item container justify="space-evenly">
          <SocialIcon />
        </Grid>
      </Grid>
    </Grid>
  );
}
