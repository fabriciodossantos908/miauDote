import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import Axios from 'axios';
// import { SelectSexType } from '../FieldStyle/';

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

  const { values } = props;
  //   const pickerImage = () => {

  //   }

  const uploadImage = async (file) => {
    let image = file;
    let filename = image[0].name.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();

    const USER_TOKEN = localStorage.getItem('token');

    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    const id = localStorage.getItem('pet-id');

    formData.append('file', { uri: image, name: filename, type });

    console.log("form data " + JSON.stringify(formData))
    console.log("token " +AuthStr)
    console.log("id" + id)
    Axios.put(
      `http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets/upload/foto/${id}`,
      formData,
      { headers: { Authorization: AuthStr } },
    )
      .then((response) => {
        console.log(response);
        values.url_foto = response.data;
        response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleImage(event) {
    const file = event.target.files;

    uploadImage(file);
  }


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
          onChange={handleImage}
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
