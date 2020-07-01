import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Avatar, Box, Link } from '@material-ui/core';
import CenteredTabs from '../chuncks/index'

export default function Headermain(props) {
    const classes = props.header();
    const logo = require('../../images/logoS.jpg')

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbarmain}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="dark" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Grid item justify="center" position="fixed" className={classes.logo}>
                        <Avatar alt="Remy Sharp" src={logo}/>
                    </Grid>
                    <Link href="/" disable >
                        Miaudote
                    </Link>
                    <CenteredTabs />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}