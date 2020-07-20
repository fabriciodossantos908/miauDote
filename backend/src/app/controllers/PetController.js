const { Pet, Usuario } = require('../models');
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
<<<<<<< HEAD
<<<<<<< HEAD
        ]
=======
        ],
        include: {model: Usuario, as: 'doador'}
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======
        ],
        include: {model: Usuario, as: 'doador'}
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
      const pet = await Pet.findByPk(req.params.id,{include: {model: Usuario, as: 'doador'}});
      if (pet != null) {
        pet.senha = undefined;
        pet.doador.senha = undefined;
        pet.doador.permissions = undefined;
        pet.doador.email_confirmado = undefined;
<<<<<<< HEAD
<<<<<<< HEAD
=======

        pet.visualizacoes += 1;
        await pet.save();
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
=======

        pet.visualizacoes += 1;
        await pet.save();
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
        return res.json(pet);
      }

      return res.status(404).json({ erro: "Pet não encontrado." });

    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {

      let pet = req.body;
      const usuario = await Usuario.findByPk(pet.id_usuario);
      if(!usuario){
        return res.status(404).json({erro: 'Não existem usuários cadastrados com esse ID.'})
      }

      pet = await Pet.create(pet);
      return res.status(201).json(pet);

    } catch (err) {
      return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } });
    }
  }

  async update(req, res) {
    try {
      const pet = await Pet.findByPk(req.params.id);
      if (!pet)
        return res.status(404).json({ erro: 'o Pet a ser editado não existe.' })


      
      await pet.update(req.body);

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