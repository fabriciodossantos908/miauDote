import React from 'react';
import {
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { InputField } from '../../FieldStyle';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

// Tell about this. Create the user option to define if the per was founded or are of himself

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function PetAddress(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const { values } = props;

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (checked === true) {
    if (!('geolocation' in navigator)) {
      alert('Navegador não tem suporte API Geolocation');
    } else {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };
      function success(pos) {
        var crd = pos.coords;
        values.latitude = crd.latitude;
        values.longitude = crd.longitude;

        console.log('Sua posição atual é:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('Mais ou menos ' + crd.accuracy + ' metros.');
      }

      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }
  const {
    formField: { cep, uf, cidade },
  } = props;
  return (
    <React.Fragment>
      <Grid>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Deseja usar a sua localização atual?
          </FormLabel>
          <RadioGroup
            aria-label="gender"
            value={checked}
            name="gender"
            onChange={handleChange}
          >
            <Grid container jutify="flex-start" spacing={1} orientation="row">
              <Grid item xs={6}>
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Sim"
                />
              </Grid>

              <Grid item xs={6}>
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Não"
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item container justify="flex-start" spacing={1} direction="row">
        <Grid item xs={6}>
          <Zoom in={checked === true ? false : true}>
            <InputField
              name={uf.name}
              variant="outlined"
              label={uf.label}
              fullWidth
            />
          </Zoom>
        </Grid>
        <Grid item xs={6}>
          <Zoom
            in={checked === true ? false : true}
            style={{ transitionDelay: checked ? '500ms' : '0ms' }}
          >
            <InputField
              name={cidade.name}
              variant="outlined"
              label={cidade.label}
              fullWidth
            />
          </Zoom>
        </Grid>
        {/* <InputField name={cep.name} variant="outlined" label={cep.label}  fullWidth />
        <InputField name={uf.name} variant="outlined" label={uf.label}  fullWidth />
        <InputField name={cidade.name} variant="outlined" label={cidade.label}  fullWidth /> */}
        {/* <InputField name={longitude.name} variant="outlined" label={longitude.label} fullWidth /> */}
      </Grid>
    </React.Fragment>
  );
}
