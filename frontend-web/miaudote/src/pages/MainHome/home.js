import React from 'react';
import { Grid, Paper, makeStyles, Container, Typography } from '@material-ui/core';
import { useStyle } from '../../components/Layout/styles'

const style = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    }
}));

export default function Home() {
    const classes = useStyle()
    const classesM = style()

    return (
        <div className={classesM.root}>
            <Grid container color="primary" direction="column">
                <Grid item xs={12} justify="center" spacing={3} direction="row" style={{display: "flex"}}>
                    <Grid item xs={6}>
                        <Grid item xs={12} style={{backgroundColor: "black", width: "100%", height: 400}}>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}