import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStyle, theme } from '../../../components/Layout/styles';

import './style.css';

import SettingsIcon from '@material-ui/icons/Settings';
import { Typography, Button, Grid } from '@material-ui/core';
import { palette } from '../../../components/Layout/theme';

export default function GearLoading() {
  const classes = useStyle();

  const history = useHistory();

  return (
    <div class="gears">
      <Grid item container justify="center" alignItems="center" direction="row">
        <Grid item xs={3} style={{ marginTop: 40 }}>
          <SettingsIcon
            alt="gear"
            className="small"
            style={{ color: palette.primary.main }}
          />
          <SettingsIcon
            alt="gear"
            className="small2"
            style={{ color: palette.secondary.main }}
          />
          <Typography variant="h6" style={{ color: palette.common.black }}>
            Desculpe, não estamos conseguindo carregar os dados do dono.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
