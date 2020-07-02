import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Grid, Avatar } from '@material-ui/core';
import CenteredTabs from '../chuncks/index'

import { header } from '../../components/Layout/styles'

import { Link } from 'react-router-dom'

import { Perfil } from './compStyles/'

const logo = require('../../images/logoS.jpg')

export default function HeaderMain() {
    const classes = header();

    return (
        <Grid xs={12} className={classes.root}>
            <AppBar position="static" color="color" className={classes.appBar}>
                <Toolbar>
                    <Grid item xs={2}>
                        <Perfil />
                    </Grid>
                    <Grid item container>
                        <Grid item container xs={6} direction="row" justify="space-evenly" style={{ marginLeft: 150 }}>
                            <Grid item>
                                <Link to="/formCompany">cadastrar empresa</Link>
                            </Grid>
                            <Grid item>

                                <Link to="/formUser">cadastrar Usuario</Link>
                            </Grid>

                            <Grid item>
                                <Link to="/">
                                    <Avatar
                                        alt="Miaudote"
                                        src={logo}
                                    />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/login">Login</Link>
                            </Grid>
                            <Grid item>

                                <Link to="/formPet">cadastrar Pet</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}