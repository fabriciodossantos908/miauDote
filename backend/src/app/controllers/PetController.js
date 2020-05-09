const { Pet } = require('../models');
const { Op } = require('sequelize');
const { sequelize } = require('../models/index');

class PetController {
  async index(req, res) {

    const { limite = 5, pag = 1} = req.query;
    const offset = (pag - 1) * limite;

    try {

      let count = await Pet.count({
        where: {
          id: {
            [Op.gt]: offset
          }
        }
      });
      res.header('X-Total-Count', count);

      let pets = await Pet.findAll({
        limit: parseInt(limite),
        offset: offset,
        order: [
          ['id', 'DESC']
        ]
      });
      if (pets.length > 0) {
        pets = pets.map(pet => {
          pet.senha = undefined;
          return pet;
        })
        return res.json(pets);
      }

      return res.status(404).json({ erro: "Não há mais pets cadastrados." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByProximity(req, res) {

    let {
      lat,
      lgt,
      distancia = 25,
      pag = 1,
      limite = 5,
      especie = "",
      porte = "",
      sexo = ""
    } = req.query;

    if (!lat || !lgt)
      return res.status(400).json({ erro: "A Latitude e Longitude são necessárias." });

    console.log(sexo);

    if (especie)
      especie = `WHERE especie = "${especie}"` 
    
    if(!especie && porte != ""){
      porte = `WHERE porte = "${porte}"` 
    }else if(porte){
      porte = `AND porte = "${porte}"` 
    }

    if(!especie && sexo != "" && !porte && sexo != ""){
      sexo = `WHERE sexo = "${sexo}"`
    }else if(sexo){
      sexo = `AND sexo = "${sexo}"`
    }

    const offset = (pag - 1) * limite;


    try {

      let [results, metadata] = await sequelize.query(`
        SELECT SQL_CALC_FOUND_ROWS *,
        ((3956 *
        2 *
        ASIN(
          SQRT(POWER(SIN((abs(${lat}) - abs(pets.latitude)) *
                pi()/180 / 2),2) +
          COS(abs(${lat}) * pi()/180 ) *
          COS(abs(pets.latitude) * pi()/180) *
          POWER(SIN((abs(${lgt}) - abs(pets.longitude)) *
                pi()/180 / 2), 2))
          )
          ) * 1.609344) as distancia
        FROM tbl_pets pets
        ${especie} ${porte} ${sexo}
        having distancia < ${distancia}
        ORDER BY distancia
        LIMIT ${limite} OFFSET ${offset};
        `);

      if (results.length == 0) {
        return res.status(404)
          .json({ erro: 'Não encontramos mais pets, você pode aumentar a distância para uma busca mais ampla' })
      }

      const pets = results;

      [results, metadata] = await sequelize.query(`
        SELECT FOUND_ROWS()
        `);

      const count = (results[0]['FOUND_ROWS()']);

      res.header('X-Total-Count', count);

      return res.json(pets);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }


  }

  async show(req, res) {
    try {
      const pet = await Pet.findByPk(req.params.id);
      if (pet != null) {
        pet.senha = undefined;
        return res.json(pet);
      }

      return res.status(404).json({ erro: "Usuário não encontrado." });

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {

      const pet = await Pet.create(req.body);
      return res.json(pet);

    } catch (err) {
      return res.status(400).json({ erro: { campo: error.errors[0].path, mensagem: error.errors[0].message } });
    }
  }

  async update(req, res) {
    try {
      const pet = await Pet.findByPk(req.params.id);
      if (!pet)
        return res.status(404).json({ erro: 'o Usuário a ser editado não existe.' })

      await pet.update(req.body);
      pet.senha = undefined;

      return res.json({ pet });
    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
    }
  }

  async destroy(req, res) {
    try {
      const pet = await Pet.findByPk(req.params.id);
      if (!pet)
        return res.status(404).json({ erro: 'o Usuário a ser deletado não existe.' })

      await pet.destroy();

      return res.status(204).json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PetController();