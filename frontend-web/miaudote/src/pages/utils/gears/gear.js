import React from 'react'
import { Link } from 'react-router-dom';
import { useStyle } from '../../../components/Layout/styles'

import './style.css'

import SettingsIcon from '@material-ui/icons/Settings';
import { Typography, Button } from '@material-ui/core';

export default function Gear() {
    const classes = useStyle()
    return (
        <div class="gears">
            <SettingsIcon alt="gear" className="big" />
            <SettingsIcon alt="gear" className="small" />
            <Typography variant="h4">Ops! estamos trabalhando nessa tela Pet Lover.</Typography>
            <Link to="/" className={classes.links} >
                <Button>
                    Volte aqui
                </Button>
                </Link>
        </div>
    )
}