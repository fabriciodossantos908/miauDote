const { Pet } = require('../../models');
const { Op } = require('sequelize');

class PetFilter {

   async indexBylocal(req, res) {

      const { uf } = req.params
      let pets = null;
      let count = null;

      const { limite = 5, pag = 1, cidade } = req.query;
      const offset = (pag - 1) * limite;

      try {

         if (!cidade) {
            count = await Pet.count({
               where: {
                  uf,
                  id: {
                     [Op.gt]: offset
                  }
               }
            });

            pets = await Pet.findAll({
               where: {
                  uf,                  
               },
               offset,
               limit: parseInt(limite)
            })
         } else {
            pets = await Pet.findAll({
               where: {
                  uf,
                  cidade
               },
               offset,
               limit: parseInt(limite)
            });

            count = await Pet.count({
               where: {
                  uf,
                  cidade,
                  id: {
                     [Op.gt]: offset
                  }
               }
            });
         }

         res.header('X-Total-Count', count);


         return res.json(pets);

      } catch (error) {

         return res.status(400).json({ erro: error.message });
      }
   }

}

module.exports = new PetFilter();