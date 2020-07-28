import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Footer from '../Footer/Footer';
import { theme, useStyle } from './styles';
import { SocialIcon } from '../../pages/initialHome/InitialHome';
import { isNil } from 'lodash';

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();
  const [token, setToken] = useState(false);
  const checkToken = () => {
    const token = localStorage.getItem('token');
    isNil(token) ? setToken(false) : setToken(true);
  };
  useEffect(() => {
    window.addEventListener('check', checkToken());
    return () => {
      window.addEventListener('check', checkToken());
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid className={classes.root}>
        <Grid className={classes.container}>{children}</Grid>
      </Grid>
      {token == true ? <Footer useStyle={useStyle} /> : <SocialIcon />}
    </ThemeProvider>
  );
}
