import React from 'react';
import { Grid, CardMedia, Typography } from '@material-ui/core';
import { useStyle, theme } from '../../components/Layout/styles'
import {CardPets} from '../UserHome/compStyles'

const imageDog = require("../../images/petImg/dog/dog_boxer.jpg")


export default function Home() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Grid container color="primary" direction="column">
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex", marginTop: 20, marginBottom: 40}}>
                    <Grid item xs={6}>
                        <Grid item container justify="center" direction="row" style={{borderTopLeftRadius: 40, borderBottomLeftRadius: 40}} className={classes.grid}>
                            <Grid item xs={12} style={{ color: theme.palette.primary.contrastText}}>
                                <Typography variant="h4" style={{fontWeight: "bold"}}>
                                    O que você deve saber
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{color: theme.palette.primary.dark}}>
                                <Typography variant="h4" style={{fontWeight: "bold"}}>
                                    antes de adotar um animal
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: 30}}>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item container justify="center" alignItems="center" direction="row" style={{borderTopRightRadius: 40, borderBottomRightRadius: 40}} className={classes.grid}>
                            <Grid item xs={6} >
                                <CardMedia
                                    className={classes.media} 
                                    image={imageDog}
                                />
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex"}}>
                    <CardPets />                   
                    <CardPets />                   
                    <CardPets />                   
                </Grid>
            </Grid>
        </div>
    )
}