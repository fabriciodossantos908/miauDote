import React from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { useStyle } from '../../components/Layout/styles'
import {CardPets, Avatar} from '../MainHome/compStyles'

const style = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
}));

export default function Home() {
    const classes = useStyle()
    const classesM = style()

    return (
        <div className={classesM.root}>
            <Grid container color="primary" direction="column">
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex"}}>
                    <Grid item xs={6}>
                        <Grid item xs={12} style={{backgroundColor: "black", height: 400}}>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} />
                    </Grid>
                </Grid>
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex"}}>
                    
                </Grid>
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex"}}>
                    <Grid item xs={10} direction="row" style={{marginLeft: "auto", marginRight: "auto"}}> 
                       <Avatar />
                    </Grid>     
                </Grid>
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex"}}>
                    <Grid>
                        <Typography variant="h5">
                            Dá só uma olhadinha nas mais
                        </Typography>
                        <Typography variant="h5">
                            novas fofurinhas do pedaço!!    
                        </Typography>
                    </Grid>
                    <Grid>

                    </Grid>
                </Grid>
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex"}} className={classesM.paper}>
                    <CardPets />                   
                    <CardPets />                   
                    <CardPets />                   
                </Grid>
            </Grid>
        </div>
    )
}