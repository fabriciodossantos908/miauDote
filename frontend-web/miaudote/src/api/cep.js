import Axios from 'axios';

export default class Cep {
  getAddress = this.getAddress.bind(this);

  getAddress(cep) {
    let startUrl = 'https://viacep.com.br/ws/';
    let endUrl = '/json/';
    const midCep = cep;
    const finalUrl = startUrl + midCep + endUrl;

    Axios.get(finalUrl).then((res) => {
      const address = { address: res.data };
      return address;
    });

    return true;
  }
}
