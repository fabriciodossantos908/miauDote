import React from 'react'
import { petStyle } from './styles'
import { Grid, CardMedia } from '@material-ui/core'


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

                    <Grid item xs={4}>
                        <h1> introduction will be here</h1>
                    </Grid>

                    {/* Corpo da tela de filtragem */}
                    <Grid item container direction="column" className={classes.body}>
                        {/* Barra de perquisa */}
                        <Grid item>
                            <h1> search bar will be here</h1>

                        </Grid>

                        {/* cards dos pets */}
                        <Grid item>
                            <h1> pet cards will be here</h1>

                        </Grid>
                    </Grid>
                </Grid>

            </CardMedia>

        </div>
    )
}