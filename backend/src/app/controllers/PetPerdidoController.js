const { Usuario, PetPerdido } = require('../models');
const { Op } = require('sequelize');

class PetPerdidoController {

   async index(req, res) {
      const { limite = 5, pag = 1 } = req.query;
      const offset = limite * (pag - 1);

      try {

         let count = await PetPerdido.count();

         res.header('X-Total-Count', count);

         let petsPerdidos = await PetPerdido.findAll({
            limit: parseInt(limite),
            offset: offset,
            where: {
               encontrado: false
            }
         });

         if (petsPerdidos.length == 0) {
            return res.status(200).json({ aviso: 'Não houveram mais pets perdidos.' })
         }

         return res.json(petsPerdidos);
      } catch (err) {
         return res.status(400).json({ erro: err.message })
      }
   }

   async show(req, res) {
      try {
         const petPerdido = await PetPerdido.findByPk(req.params.id, { include: { model: Usuario, as: 'dono' } });

         if (!petPerdido) {
            return res.status(400).json({ erro: 'Não há pets cadastrados com esse ID.' });
         }

         petPerdido.id_usuario = undefined;
         petPerdido.dono.senha = undefined;
         petPerdido.dono.permissions = undefined;
         petPerdido.dono.email_confirmado = undefined;


         return res.json(petPerdido);
      } catch (err) {

      }
   }

   async store(req, res) {
      try {
         let petPerdido = await PetPerdido.create(req.body);

         if (!petPerdido) {
            return res.status(400).json({ erro: 'Não foi possível cadastrar o pet.' })
         }

         return res.json(petPerdido);
      } catch (err) {
         return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } })
      }
   }

   async update(req, res) {
      try {
         let petPerdido = await PetPerdido.findByPk(req.params.id);


         if (!petPerdido) {
            return res.status(404).json({ erro: 'O Pet a ser editado não existe.' })
         }

         await petPerdido.update(req.body);

         return res.json(petPerdido);
      } catch (error) {
         return res.status(400).json({ erro: { campo: error.errors[0].path, mensagem: error.errors[0].message } });
      }
   }

   async destroy(req, res) {
      try {
         const petPerdido = await PetPerdido.findByPk(req.params.id);

         if (!petPerdido) {
            return res.status(400).json({ erro: 'O pet a ser excluído não existe.' })
         }

         await petPerdido.destroy();

         return res.status(204).json();
      } catch (err) {
         return res.status(400).json({ erro: err.message });
      }
   }

}

module.exports = new PetPerdidoController();