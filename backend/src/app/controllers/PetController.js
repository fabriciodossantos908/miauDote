const { Pet } = require('../models');
const { Op } = require('sequelize');

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
      return res.status(201).json(pet);

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