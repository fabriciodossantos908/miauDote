import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Avatar } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import { theme, header } from '../Layout/styles'

import { LinksBase } from './headerComp/'
import { Perfil } from '../../pages/UserHome/compStyles'
import BadgeAvatars from './headerComp/IconProfileUser';


export default function HeaderMain() {
    const classes = header();

    return (
        <Grid xs={12}>
            <AppBar position="static">
                <Toolbar className={classes.appbarmain}>
                    <Grid item xs={1}>
                        <Perfil classHeader={header} />
                    </Grid>
                    <Grid item xs={1} style={{marginRight: "auto"}}>
                        <Link to="/homeUser" className={classes.links}>
                            <Tab label="Miaudote"/>
                        </Link>
                    </Grid>
                    <Grid item container>
                        <Grid item container xs={8} direction="row" justify="space-evenly" style={{ marginLeft: 150 }}>
                            <LinksBase theme={theme} />
                        </Grid>
                    </Grid>
                    <Grid item xs={2} style={{marginLeft: "auto"}}>
                        <Link to="/profile" title="Joao" alt="foto" className={classes.links}>
                            <BadgeAvatars/>
                        </Link>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}