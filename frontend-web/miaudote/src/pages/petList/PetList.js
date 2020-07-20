import React from 'react'
import { petStyle } from './styles'
import { Grid, CardMedia, Typography } from '@material-ui/core'
import { PetTab } from './petComp/'

const background = require('../../images/background.jpg')

export default function PetList() {
    const classes = petStyle()
    return (
        <div className={classes.root}>
            <CardMedia
                image={background}
            >
                {/* Introdução da página */}
                <Grid container direction="column" justify="center" alignItems="center">

                    <Grid item xs={12}>
                        <Typography variant="h3" className={classes.typografy}>
                             Essas fofurinhas estão esperando por você !
                        </Typography>
                    </Grid>

                    {/* Corpo da tela de filtragem */}
                    <Grid item container direction="column" className={classes.body}>
                        {/* Barra de perquisa */}
                        <Grid item>
                            <h1> search bar will be here</h1>

                        </Grid>

                        {/* cards dos pets */}
                        <Grid item xs="12" style={{marginTop: 50}}>
                            <PetTab/>                                            
                        </Grid>
                    </Grid>
                </Grid>

            </CardMedia>

        </div>
    )
}