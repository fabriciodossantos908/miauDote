import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';


export default function Headermain(props) {
    const classes = props.header();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbarmain}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Grid item position="fixed" className={classes.logo}>

                    </Grid>
                    <Typography color="secondary">
                        <h1 className={classes.firstName}>Miau</h1>
                    </Typography>
                    <Typography color="secondary" className={classes.title}>
                        <h1 className={classes.twoName}>dote</h1>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}