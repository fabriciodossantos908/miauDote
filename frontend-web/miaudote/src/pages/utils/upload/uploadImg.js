uploadImage = async (file) => {
  let { image } = file;
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
