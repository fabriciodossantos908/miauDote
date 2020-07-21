import React from 'react';
import { Link } from 'react-router-dom';
import { useStyle, theme } from '../../../components/Layout/styles';

import './style.css';

import SettingsIcon from '@material-ui/icons/Settings';
import { Typography, Button, Grid } from '@material-ui/core';

export default function Gear() {
  const classes = useStyle();
  return (
    <div class="gears">
      <Grid item container justify="center" alignItems="center" direction="row">
        <Grid item xs={3} style={{ marginTop: 100 }}>
          <SettingsIcon
            alt="gear"
            className="big"
            style={{ color: theme.palette.secondary.main }}
          />
          <SettingsIcon
            alt="gear"
            className="small"
            style={{ color: theme.palette.secondary.main }}
          />
          <Typography
            variant="h4"
            style={{ color: theme.palette.primary.contrastText }}
          >
            Ops! estamos trabalhando nessa tela Pet Lover.
          </Typography>
          <Link to="/homeUser" className={classes.links}>
            <Button>Voltar para Home</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
