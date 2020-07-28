import React, { useState, useEffect } from 'react';
import { CssBaseline, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Footer from '../Footer/Footer';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { theme, useStyle } from './styles';
import { isNil } from 'lodash';
import { useStyles } from '../Footer/styles';
import { palette } from './theme';

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

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  const [token, setToken] = useState(false);
  const checkToken = () => {
    const token = localStorage.getItem('token');
    isNil(token) ? setToken(false) : setToken(true);
  };
  useEffect(() => {
    window.addEventListener('load', checkToken());
    return () => {
      window.addEventListener('load', checkToken());
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid className={classes.root}>
        <Grid className={classes.container}>{children}</Grid>
      </Grid>
      {token === true ? (
        <Footer useStyle={useStyle} />
      ) : (
        <Grid item container justify="center">
          <Grid item>
            <Typography variant="h4" style={{ color: palette.secondary.main }}>
              Redes Sociais
            </Typography>
          </Grid>
          <Grid item container justify="space-evenly">
            <SocialIcon />
          </Grid>
        </Grid>
      )}
    </ThemeProvider>
  );
}
