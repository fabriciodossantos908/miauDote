import React from 'react';
import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import HeaderMain from '../../pages/MainHome/header'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Routes from '../../routes'

import { theme, useStyle, header} from './styles';

export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Header header={header} /> */}
      {/* <HeaderMain header={header}></HeaderMain> */}
        <Routes/>
      <Footer useStyle={useStyle}/>
    </ThemeProvider>
  );
}
