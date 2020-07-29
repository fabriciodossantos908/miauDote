import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import Axios from 'axios';
import { palette } from '../../../Layout/theme';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function FormUserPhoto(props) {
  const classesPhoto = useStyles();
  var selectedFile = null;
  const history = useHistory();

  const fileUploadHandler = (event) => {
    selectedFile = event.target.files;
    let image = selectedFile[0];
    const formData = new FormData();

    let id = localStorage.getItem('id');

    formData.append('file', image);

    Axios.put(
      `http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/upload/foto/${id}`,
      formData,
    )
      .then((response) => {
        alert('Foto alterada com sucesso!');
        localStorage.setItem('photo', response.data.url_foto);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });

    history.push('/profile');
  };

  return (
    <React.Fragment>
      <Typography variant="h6" align="center">
        Selecione uma foto.
      </Typography>

      <Grid item xs={12}>
        <input
          accept="image/*"
          className={classesPhoto.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={fileUploadHandler}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            style={{ backgroundColor: palette.primary.light }}
            component="span"
          >
            Upload
          </Button>
        </label>
      </Grid>
    </React.Fragment>
  );
}
