const { Pet } = require('../models');
const { Op } = require('sequelize');
const { sequelize } = require('../models/index');

class PetController {
  async index(req, res) {
    try {
      let pets = await Pet.findAll();
      if (pets.length > 0) {
        pets = pets.map(pet => {
          pet.senha = undefined;
          return pet;
        })
        return res.json(pets);
      }

      return res.status(404).json({ erro: "Não há pets cadastrados." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByNome(req, res) {
    try {
      const query = `%${req.params.nome}%`
      let pets = await Pet.findAll({
        where: {
          nome: {
            [Op.like]: query
          }
        }
      });

      if (pets.length > 0) {
        pets = pets.map(pet => {
          pet.senha = undefined;
          return pet;
        })
        return res.json(pet);
      }

      return res.status(404).json({ erro: "Nenhum pet encontrado." });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async showByProximity(req, res) {

    const { 
      lat, 
      lgt, 
      distancia, 
      pag = 1, 
      limite = 5 
    } = req.query;

    try {
      let [results, metadata] = await sequelize.query(`
        SELECT COUNT(*),
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
        having distancia < ${distancia}
        ORDER BY distancia;
        `);

      const count = (results[0]['COUNT(*)']);
      const offset = (pag - 1) * limite;
      
      res.header('X-Total-Count', count);

      [results, metadata] = await sequelize.query(`
        SELECT *,
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
        having distancia < ${distancia}
        ORDER BY distancia
        LIMIT ${limite} OFFSET ${offset};
        `);

      if (results.length == 0){
        return res.status(404)
        .json({erro: 'Não existem mais pets, aumente a distância para uma busca mais ampla'})
      }


      return res.json(results);
    } catch (error) {
      return res.status(400).json({ error: err.message });
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
      console.log(req.body);
      const pet = await Pet.create(req.body);
      console.log(pet);
      return res.json(pet);
    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
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