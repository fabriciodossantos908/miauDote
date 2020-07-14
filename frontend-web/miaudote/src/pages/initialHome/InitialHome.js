import React from 'react'
import { mainHome } from '../../components/Layout/styles'
import { Grid, CardMedia, Avatar, Typography } from '@material-ui/core'

import CheckoutCompanyStep from '../../components/signUp/CheckoutUser/checkoutUserStep'

import { Dog_boxer, Cachorro, Cachorro2, Cachorro3 } from '../../images/petImg/dog/index'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

function SocialIcon() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item>
                <Avatar
                    alt="instagram"
                    src={Cachorro}
                    className={classes.large}
                />
            </Grid>
            <Grid item>
                <Avatar
                    alt="facebook"
                    src={Cachorro2}
                    className={classes.large}
                />
            </Grid>
            <Grid item>
                <Avatar
                    alt="contatos"
                    src={Cachorro3}
                    className={classes.large}
                />
            </Grid>
        </React.Fragment>
    );
}


export default function InitialHome() {
    const classes = mainHome()

    return (
        <Grid container className={classes.mainPaper}>
            <Grid item container direction="row">
                <Grid item xs={6}container>
                    <Grid item xs={6}>
                        <CardMedia
                            image={Dog_boxer}
                            alt="boxer dog"
                            className={classes.descSide}
                        >
                            <Grid container justify="center" orientation="column" className={classes.descContent}>
                                <Grid item xs={8}>
                                    <Typography
                                    variant="h4"
                                    align="center"
                                    style={{color: "white"}}
                                    >
                                        Seja bem vindo(a)
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography
                                    variant="h4"
                                    align="center"
                                    style={{color: "white"}}
                                    >
                                        ao miaudote!!
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography
                                    variant="h5"
                                    align="center"
                                    style={{color: "white"}}
                                    >
                                        cadastre-se ou faça o login, para ter acesso a todas as fofurinhas do nosso Brasil !!.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardMedia>
                    </Grid>
                    <Grid item></Grid>
                </Grid>
                <Grid item xs={6}>
                    <CheckoutCompanyStep />
                </Grid>
            </Grid>
            <Grid item container justify="center" spacing={2}>
                <Grid item>
                    <Typography
                        variant="h4"
                    >
                        Redes Sociais
                            </Typography>
                </Grid>
                <Grid item container justify="space-evenly" alignItems="center">
                    <SocialIcon />
                </Grid>
            </Grid>
        </Grid>
    )

}