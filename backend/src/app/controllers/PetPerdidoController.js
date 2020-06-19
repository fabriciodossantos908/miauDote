const { Usuario, PetPerdido } = require('../models');

class PetPerdidoController{

   async index(req, res){
      try {
         let petsPerdidos = await PetPerdido.findAll({
            include: {
               model: Usuario,
               as: 'dono'
            }
         });

         if(petsPerdidos.length == 0){
            return res.status(200).json({aviso: 'Não houveram pets perdidos.'})
         }

         petsPerdidos = petsPerdidos.map(pet=>{
            pet.dono.senha = undefined,
            pet.dono.permissions = undefined,
            pet.dono.email_confirmado = undefined
            return pet;
         })

         return res.json(petsPerdidos);
      } catch (err) {
         return res.status(400).json({ erro: err.message })
      }
   }
   
   async store(req, res){
      try {
         let petPerdido = await PetPerdido.create(req.body);

         if(petPerdido.length == 0){
            return res.status(400).json({erro: 'Não foi possível cadastrar o pet.'})
         }

         return res.json(petPerdido);
      } catch (err) {
         return res.status(400).json({ erro: { campo: err.errors[0].path, mensagem: err.errors[0].message } })
      }
   }

}

module.exports = new PetPerdidoController();