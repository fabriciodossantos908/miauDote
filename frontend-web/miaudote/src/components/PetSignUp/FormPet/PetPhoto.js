import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import Axios from 'axios';
// import { SelectSexType } from '../FieldStyle/';
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

export default function PetPhoto(props) {
  const classes = useStyles();
  const history = useHistory();
  const { values } = props;

  var selectedFile = null;

  const fileUploadHandler = (event) => {
    selectedFile = event.target.files;
    let image = selectedFile[0];
    const formData = new FormData();

    let id = localStorage.getItem('pet-id');

    formData.append('file', image);

    Axios.put(
      `http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets/upload/foto/${id}`,
      formData,
    )
      .then((response) => {
        //   values.url_foto = response.data.url_foto
        alert('cadastrado com sucesso!');
        console.log(response);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });

    history.push('/pet');
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Coloque uma foto de seu pet aqui
        </Typography>
        <input
          accept="image/*"
          className={classes.input}
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
