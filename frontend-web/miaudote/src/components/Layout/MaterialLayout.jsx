import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import HeaderMain from '../../pages/home/header'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { theme, useStyle, header} from './styles';
=======
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Footer from '../Footer/Footer';

import { theme, useStyle } from './styles';
<<<<<<< HEAD
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <Header header={header} /> */}
      <HeaderMain header={header}></HeaderMain>
      <Grid container className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>{children}</Container>
=======
      <Grid className={classes.root}>
        <Grid className={classes.container}>{children}</Grid>
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
      <Grid className={classes.root}>
        <Grid className={classes.container}>{children}</Grid>
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      </Grid>
      <Footer useStyle={useStyle}/>
    </ThemeProvider>
  );
}
