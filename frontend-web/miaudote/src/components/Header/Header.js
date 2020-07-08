import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from '@material-ui/core';

import { theme, header } from '../../components/Layout/styles'

import { Perfil } from '../../pages/UserHome/compStyles'

import { Links } from './headerComp'

export default function Header() {
    const classes = header();

    return (
        <Grid xs={12}>
            <AppBar position="static" color="color" className={classes.appBar}>
                <Toolbar>
                    <Grid item xs={1}>
                        <Perfil classHeader={header} />
                    </Grid>
                    <Grid item container>
                        <Grid item container xs={8} direction="row" justify="space-evenly" style={{ marginLeft: 150 }}>
                            <Links theme={theme} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}