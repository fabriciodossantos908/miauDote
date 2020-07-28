import React, { useEffect } from 'react';
import { mainHome, theme } from '../../components/Layout/styles';
import { Grid, CardMedia, Typography, Fade, Slide } from '@material-ui/core';

import CheckoutUserStep from '../../components/signUp/CheckoutUser/checkoutUserStep';

import { Dog_boxer } from '../../images/petImg/dog/index';

import { makeStyles } from '@material-ui/core/styles';
import { palette } from '../../components/Layout/theme';

const baseHome = require('../../images/baseImg/baseHome.jpg');

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
    };
  }, []);

  return (
    <Grid item container xs={12} className={classes.mainPaper}>
      <Grid item xs={12}>
        <CardMedia
          style={{
            marginTop: -150,
            paddingTop: 150,
          }}
          image={baseHome}
          alt="Photo by Daria Shevtsova from Pexels"
          //   title="Photo by Daria Shevtsova from Pexels"
          className={classes.descSide}
        >
          <Grid container direction="row">
            <Grid item xs={6}>
              <Grid
                container
                justify="flex-start"
                orientation="column"
                className={classes.descContent}
              >
                <Slide
                  direction="right"
                  in={checked}
                  timeout={2000}
                  mountOnEnter
                  unmountOnExit
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.sectionDescContent}
                    style={{
                      marginTop: 80,
                      backgroundColor: palette.secondary.dark,
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      style={{ color: palette.primary.contrastText }}
                    >
                      Seja bem vindo(a)
                    </Typography>
                  </Grid>
                </Slide>

                <Slide
                  direction="right"
                  in={checked}
                  timeout={2500}
                  mountOnEnter
                  unmountOnExit
                >
                  <Grid
                    item
                    xs={11}
                    className={classes.sectionDescContent}
                    style={{
                      marginTop: -150,
                      backgroundColor: palette.secondary.main,
                    }}
                  >
                    <Typography
                      variant="h4"
                      align="center"
                      style={{ color: palette.primary.contrastText }}
                    >
                      ao miaudote!!
                    </Typography>
                  </Grid>
                </Slide>

                <Slide
                  direction="right"
                  in={checked}
                  timeout={3000}
                  mountOnEnter
                  unmountOnExit
                >
                  <Grid
                    item
                    xs={10}
                    className={classes.sectionDescContent}
                    style={{
                      height: 100,
                      marginTop: -200,
                      backgroundColor: palette.secondary.light,
                    }}
                  >
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ color: palette.common.black }}
                    >
                      cadastre-se ou faça o login, para ter acesso a todas as
                      fofurinhas do nosso Brasil !!
                    </Typography>
                  </Grid>
                </Slide>
              </Grid>
            </Grid>

            <Slide
              direction="left"
              in={checked}
              timeout={2500}
              mountOnEnter
              unmountOnExit
            >
              <Grid item xs={6}>
                <CheckoutUserStep />
              </Grid>
            </Slide>
          </Grid>
        </CardMedia>
      </Grid>
    </Grid>
  );
}
