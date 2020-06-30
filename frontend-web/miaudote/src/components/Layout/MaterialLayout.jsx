import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import HeaderMain from '../../pages/home/header'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { theme, useStyle, header} from './styles';

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header header={header} /> */}
      <HeaderMain header={header}></HeaderMain>
      <Grid container className={classes.root}>
        <Container maxWidth="sm" className={classes.container}>{children}</Container>
      </Grid>
      <Footer useStyle={useStyle}/>
    </ThemeProvider>
  );
}
