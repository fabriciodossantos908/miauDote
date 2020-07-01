import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    paper: {
        width : 600,
        height : 600,
    }
}))

export default function Home() {
    const classes = useStyle()

    return (
        <React.Fragment>
                <Grid item container color="primary" direction="row">
                    <Grid item xs={5} color="primary">
                        <Paper className={classes.paper}></Paper>
                    </Grid>
                    <Grid item xs={5} color="primary">
                        <Paper className={classes.paper}></Paper>
                    </Grid>

            </Grid>
        </React.Fragment>
    )
}