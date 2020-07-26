import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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

const uploadImage = async (file) => {
  let image = file;
  let filename = image[0].name.split('/').pop();

  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;
  const formData = new FormData();

  const id = localStorage.getItem('id')

  formData.append('file', { uri: image, name: filename, type });


  console.log("image " + JSON.stringify(image[0], null, 2))
  console.log("filename " + filename)
  console.log("type " + type)

  fetch(
    `http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/pets/upload/foto/${id}`,
    {
      method: 'PUT',
      body: formData,
    },
  )
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((result) => {
      alert('the query result' + JSON.stringify(result, null, 2));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function ImageField() {
  const classes = useStyles();

  function handleImage(event) {
    const file = event.target.files;

    uploadImage(file);
  }

  return (
    <div className={classes.root}>
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
    </div>
  );
}
