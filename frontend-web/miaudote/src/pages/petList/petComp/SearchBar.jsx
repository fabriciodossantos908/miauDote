import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  InputBase,
  Divider,
  Grid,
  TextField,
  Checkbox,
  withStyles,
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
      <Grid item container justify="center" xs={4}>
        <Grid item container direction="row" justify="flex-end">
          <Grid>
            <TextField
              placeholder="Encontre seu novo pet"
              inputProps={{ 'aria-label': 'Encontre seu novo pet' }}
            />
          </Grid>
          <Grid>
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
      </Grid>
      <Divider className={classes.divider} orientation="horizontal" />
      <Grid item>
        <Collapse in={checked}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            direction="row"
          >
            <Grid item xs={4}>
              <Typography variant="h4">Tipo</Typography>
              <Grid>
                <Tab name="Cachorro" />
                <Tab name="Gato" />
                <Tab name="Pássaro" />
              </Grid>
            </Grid>
            <Divider className={classes.dividerVertical} />

            <Grid item xs={4}>
              <Typography variant="h4">Tipo</Typography>
              <Grid>
                <Tab name="Cachorro" />
                <Tab name="Gato" />
                <Tab name="Pássaro" />
              </Grid>
            </Grid>
            <Divider className={classes.dividerVertical} />
            <Grid item xs={4}>
              <Typography variant="h4">Tipo</Typography>
              <Grid>
                <Tab name="Cachorro" />
                <Tab name="Gato" />
                <Tab name="Pássaro" />
              </Grid>
            </Grid>
          </Grid>
        </Collapse>
      </Grid>
    </React.Fragment>
  );
}
