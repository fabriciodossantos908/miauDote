const { PetPerdido, Usuario } = require('../../models');
const { sequelize } = require('../../models/index');

class PetPerdidoFilter {

   async indexByProximity(req, res) {


      const { latitude, longitude, distancia = 5, limite = 5, pag = 1 } = req.query;

      const offset = limite * (pag - 1);

      if (!latitude || !longitude)
         return res.status(400).json({ erro: 'A latitude e longitude são obrigatórias!' });
      try {

         let [results, metadata] = await sequelize.query(`
         SELECT SQL_CALC_FOUND_ROWS *,
         ((3956 *
         2 *
         ASIN(
           SQRT(POWER(SIN((abs(${latitude}) - abs(pets.latitude)) *
                 pi()/180 / 2),2) +
           COS(abs(${latitude}) * pi()/180 ) *
           COS(abs(pets.latitude) * pi()/180) *
           POWER(SIN((abs(${longitude}) - abs(pets.longitude)) *
                 pi()/180 / 2), 2))
           )
           ) * 1.609344) as distancia
         FROM tbl_pets_perdidos pets
         HAVING distancia < ${distancia}
         ORDER BY distancia
         LIMIT ${limite} OFFSET ${offset};
         `);

         if(!results.length > 0){
            return res.status(404).json({aviso: "Nenhum pet encontrado. Você pode aumentar a distância para uma busca mais ampla."})
         }

         const petsPerdidos = results;
  
        [results, metadata] = await sequelize.query(`
          SELECT FOUND_ROWS()
          `);
  
        const count = (results[0]['FOUND_ROWS()']);
  
        res.header('X-Total-Count', count);

         return res.json(petsPerdidos);
      } catch (err) {
         return res.status(400).json({ erro: err.message });
      }


   }

   async indexByLocal(req, res){

      const { uf } = req.params;
   
      if(!uf){
         return res.status(400).json({erro: 'A UF é necessária'});
      }

      const { cidade, limite = 5, pag = 1 } = req.query;
      const offset = limite * (pag - 1);

      let petsPerdidos = null;
      let count = null;

      try {

         if(!cidade){
            petsPerdidos = await PetPerdido.findAll({
               where: {
                  uf: uf
               },
               offset,
               limit: limite
            });

            count = await PetPerdido.count({
               where:{
                  uf: uf
               }
            })
         }else{
            petsPerdidos = await PetPerdido.findAll({
               where: {
                  uf,
                  cidade
               },
               offset,
               limit: limite
            });

            count = await PetPerdido.count({
               where: {
                  uf,
                  cidade
               }
            })
         }


         if(!petsPerdidos.length > 0)
            return res.status(404).json({erro: "Não houveram pets perdidos neste estado"});

         res.header('X-Total-Count', count);

         return res.json(petsPerdidos);
      } catch (error) {
         console.log(error);
         return res.status(400).json(error);
      }
   }
}

module.exports = new PetPerdidoFilter();