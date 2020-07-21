import * as React from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';
import { Grid, Button, CardMedia } from '@material-ui/core';

export default class ImagePickerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  //   componentDidMount() {
  //     this.getPermissionAsync();
  //   }

  //   getPermissionAsync = async () => {
  // if (Constants.platform.ios) {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   if (status !== 'granted') {
  //     alert('Sorry, we need camera roll permissions to make this work!');
  //   }
  // }
  //   };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      // console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  uploadImage = async () => {
    let { image } = this.state;
    let filename = image.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();

    formData.append('file', { uri: image, name: filename, type });

    fetch(
      `http://ec2-107-22-51-247.compute-1.amazonaws.com:3000/usuarios/upload/foto/${1}`,
      {
        method: 'PUT',
        body: formData,
      },
    )
      .then((response) => {
        // console.log(response);
        response.json();
      })
      .then((result) => {
        alert('Upload de imagem realizado com sucesso', 'Aleluuuuuuiaaaaaaaa');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let { image } = this.state;

    return (
      <Grid style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image && (
          <CardMedia url={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Button
          label="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <Button label="Enviar Imagem" onPress={this.uploadImage} />
      </Grid>
    );
  }
}
