import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Footer from '../Footer/Footer';

import { theme, useStyle } from './styles';

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid className={classes.root}>
        <Grid className={classes.container}>{children}</Grid>
      </Grid>
      <Footer useStyle={useStyle}/>
    </ThemeProvider>
  );
}
