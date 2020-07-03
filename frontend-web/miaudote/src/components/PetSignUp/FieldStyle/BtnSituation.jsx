import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
        },
    },
}));


export default function BtnSituation(props) {
    const classes = useStyles();
    // const classesPet = props.classes
    
    const [cuidados_veterinarios, setcuidados_veterinarios] = useState(false);
    const [vermifungado, setvermifungado] = useState(false);
    const [castrado, setcastrado] = useState(false);
    return (
        <div className={classes.root}>
            <ButtonGroup color="primary" aria-label="outlined primary button group" orientation="vertical">
                        <Button onClick={() => setcuidados_veterinarios(!cuidados_veterinarios)}
                            variant={cuidados_veterinarios ? "contained" : ""}
                            value={cuidados_veterinarios}
                            >
                            Cuidados Veterinários
                        </Button>
                        <Button
                            onClick={() => setvermifungado(!vermifungado)}
                            variant={vermifungado ? "contained" : ""}
                            value={vermifungado}
                        >
                            Vermifungado
                        </Button>
                        <Button
                            onClick={() => setcastrado(!castrado)}
                            variant={castrado ? "contained" : ""}
                            value={castrado}
                        >
                            Castrado
                        </Button>
            </ButtonGroup>
        </div>
    );
}