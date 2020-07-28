import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import Axios from 'axios';

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
  //   const classes = props.useStyle();
  const classesPhoto = useStyles();

  var selectedFile = null;

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
        localStorage.setItem('photo', response.data.url_foto);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" align="center">
        Por favor, selecione uma foto.
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
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
      </Grid>
    </React.Fragment>
  );
}
