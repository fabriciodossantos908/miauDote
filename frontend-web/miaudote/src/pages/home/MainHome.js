import React from 'react'
import { useStyle } from '../../components/Layout/styles'
import { Grid, Paper } from '@material-ui/core'


export default function MainHome() {
    // const classes = useStyle()

    return (
        <Grid container>
            <Grid item xs={6} color="primary" direction="column">
                <Paper elevation={2}>
                    test
                </Paper>

            </Grid>
        </Grid>

    )

}