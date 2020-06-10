const { Pet } = require('../../models');
const { Op } = require('sequelize');
const { sequelize } = require('../../models/index');


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
               }
            });
         }

         res.header('X-Total-Count', count);

         if(pets.length == 0){
            return res.status(404).json({aviso: 'Nenhum pet foi encontrado'})
         }

         return res.json(pets);

      } catch (error) {

         return res.status(400).json({ erro: error.message });
      }
   }

   async indexByProximity(req, res) {

      let {
        latitude,
        longitude
      } = req.params;
  
      let {
        distancia = 25,
        pag = 1,
        limite = 5,
        especie = "",
        porte = "",
        sexo = ""
      } = req.query;
  
      if (!latitude || !longitude)
        return res.status(400).json({ erro: "A Latitude e Longitude são necessárias." });
  
  
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
            SQRT(POWER(SIN((abs(${latitude}) - abs(pets.latitude)) *
                  pi()/180 / 2),2) +
            COS(abs(${latitude}) * pi()/180 ) *
            COS(abs(pets.latitude) * pi()/180) *
            POWER(SIN((abs(${longitude}) - abs(pets.longitude)) *
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

}

module.exports = new PetFilter();