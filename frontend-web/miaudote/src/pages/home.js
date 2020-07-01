import React from 'react';
import { Grid, Paper, makeStyles, Container, Typography } from '@material-ui/core';
import { useStyle } from '../components/Layout/styles'

export default function Home() {
    const classes = useStyle()

    return (
        <Grid container color="primary" direction="column">
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3} orientation="row">
                        <Grid item xs={6}>
                            <Typography>Teste</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper} />
                        </Grid>

                    </Grid>
                </Grid>            </Grid>
        </Grid>
    )
}