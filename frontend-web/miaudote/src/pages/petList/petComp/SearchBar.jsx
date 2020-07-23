import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  Divider,
  Grid,
  TextField,
  Checkbox,
  Typography,
} from '@material-ui/core';

import FilterListIcon from '@material-ui/icons/FilterList';
import { theme } from '../../../components/Layout/styles';
import { palette } from '../../../components/Layout/theme';

import { Tab } from './index';

const useStyles = makeStyles((theme) => ({
  svg: {
    width: 100,
    height: 100,
  },
  divider: {
    backgroundColor: palette.primary.main,
  },
  dividerVertical: {
    width: 2,
    height: 100,
    marginTop: 4,
    marginRight: 4,
    backgroundColor: palette.primary.main,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  // const classes = props.classes
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <React.Fragment>
      {/* Search bar */}
      <Grid item xs={6} container direction="row">
        <Grid item>
          <TextField
            placeholder="Encontre seu novo pet"
            inputProps={{ 'aria-label': 'Encontre seu novo pet' }}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                icon={
                  <FilterListIcon style={{ color: palette.primary.light }} />
                }
                checked={checked}
                onChange={handleChange}
                checkedIcon={
                  <FilterListIcon style={{ color: palette.primary.dark }} />
                }
                name="checkedH"
              />
            }
            label="Filtros"
          />
        </Grid>
      </Grid>
      {/* Tabs section */}
      <Grid item xs={12}>
        <Collapse in={checked}>
          <Divider className={classes.divider} orientation="horizontal" />
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            direction="row"
          >
            <Grid item xs={4}>
              <Typography variant="h4" align="center">
                Tipo
              </Typography>
              <Grid>
                <Tab name="Cachorro" />
                <Tab name="Gato" />
                <Tab name="Pássaro" />
              </Grid>
            </Grid>
            <Divider className={classes.dividerVertical} />

            <Grid item xs={4}>
              <Typography variant="h4" align="center">
                Sexo
              </Typography>
              <Grid item style={{ marginLeft: 20 }}>
                <Tab name="Macho" />
                <Tab name="Fêmea" />
              </Grid>
            </Grid>
          </Grid>
        </Collapse>
      </Grid>
    </React.Fragment>
  );
}
