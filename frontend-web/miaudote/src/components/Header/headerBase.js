import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';

import { theme, header } from '../Layout/styles'

import { LinksBase } from './headerComp/'
import { Perfil } from '../../pages/UserHome/compStyles'


export default function HeaderMain() {
    const classes = header();

    return (
        <Grid xs={12}>
            <AppBar position="static" color="color" className={classes.appBar}>
                <Toolbar>
                    <Grid item xs={2}>
                        <Perfil classHeader={header} />
                    </Grid>
                    <Grid item container>
                        <Grid item container xs={6} direction="row" justify="space-evenly" style={{ marginLeft: 150 }}>
                            <LinksBase theme={theme} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}