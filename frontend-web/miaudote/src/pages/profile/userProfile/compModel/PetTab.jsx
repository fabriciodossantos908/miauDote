import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import { Cachorro, Cachorro2, Cachorro3 } from '../../../../images/petImg/dog'

const dogs = [ Cachorro, Cachorro2, Cachorro3 ]

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        minHeight: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});

const photo = require('../../../../images/petImg/dog/Cachorro.jpg')

const pets = [
    {
        id: 0,
        nome: "Tormenta",
        especie: "cachorro",
        raca: "vira-lata",
        descricao: "Esse é brincalhão na medida certa, ou seja em excesso.",
    },
    {
        id: 1,
        nome: "Buck",
        especie: "cachorro",
        raca: "golden",
        descricao: "Fofinho e gentil como as nuvens rarefeitas ao encontro das montanhas.",
    },
    {
        id: 2,
        nome: "dudy",
        especie: "cachorro",
        raca: "golden",
        descricao: "Coisinha fofa que encontrei à espera de um melhor amigo.",
    }
]

export default function PetTab() {
    const classes = useStyles();
    return (
        <Grid container spacing={3} >
            {pets.map((petData, index) => (
                <Grid item>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={dogs[index]}
                            title={petData.nome}
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {petData.nome}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {petData.descricao}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </CardMedia>

                            <CardActions style={{ marginTop: 10 }}>
                                <Grid container justify="space-evenly">
                                    <Grid>
                                <Button size="small" color="primary">
                                    Rotina
                                </Button>
                                </Grid>
                                <Grid>
                                <Button size="small" color="primary">
                                    Ver mais
                                </Button>
                                </Grid>
                                </Grid>
                            </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
