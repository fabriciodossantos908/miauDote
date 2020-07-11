const { Pet } = require('../../models');
const { Op } = require('sequelize');
const { sequelize } = require('../../models/index');
<<<<<<< HEAD
=======
const fs = require('fs');
const path = require('path');


const fileUpload = require('../../../helpers/FileUpload');

>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500


class PetFilter {

   async indexBylocal(req, res) {

      const { uf } = req.params
      let pets = null;
      let count = null;

<<<<<<< HEAD
      const { limite = 5, pag = 1, cidade } = req.query;
=======
      const { limite = 5, pag = 1, cidade, sexo, porte } = req.query;
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      const offset = (pag - 1) * limite;

      try {

         if (!cidade) {
            count = await Pet.count({
               where: {
                  uf,
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

         if (pets.length == 0) {
            return res.status(404).json({ aviso: 'Nenhum pet foi encontrado' })
         }

         return res.json(pets);

      } catch (error) {

         return res.status(400).json({ erro: error.message });
      }
   }

   async indexByProximity(req, res) {

      let {
         latitude,
         longitude,
         distancia = 25,
         pag = 1,
         limite = 5,
         especie = "",
         porte = "",
<<<<<<< HEAD
         sexo = ""
=======
         sexo = "",
         raca = ""
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      } = req.query;

      if (!latitude || !longitude)
         return res.status(400).json({ erro: "A Latitude e Longitude são necessárias." });


      if (especie)
         especie = `WHERE especie = "${especie}"`

      if (!especie && porte != "") {
         porte = `WHERE porte = "${porte}"`
      } else if (porte) {
         porte = `AND porte = "${porte}"`
      }

      if (!especie && sexo != "" && !porte && sexo != "") {
         sexo = `WHERE sexo = "${sexo}"`
      } else if (sexo) {
         sexo = `AND sexo = "${sexo}"`
      }

<<<<<<< HEAD
=======
      if (!especie && raca != "" && !porte && !sexo) {
         raca = `WHERE raca = "${raca}"`
      } else if (raca) {
         raca = `AND raca = "${raca}"`
      }

>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
          ${especie} ${porte} ${sexo}
=======
          ${especie} ${porte} ${sexo} ${raca}
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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

<<<<<<< HEAD
=======
   async uploadPetPhoto(req, res) {
      try {
         let file = req;

         const pet = await Pet.findByPk(req.params.id);

         if (!pet) {
            return res.status(400).json({ erro: 'Pet inexistente.' });
         }

         if (pet.url_foto != 'http://storage.googleapis.com/miaudote-c4d26.appspot.com/profile%2Fuser.png' && pet.url_foto != null) {
            const fileName = pet.url_foto.substring(63);
            await fileUpload.delete('pet/' + fileName);
         }

         const url_foto = await fileUpload.upload(`./src/app/tmp/${file.file.filename}`, `pet/${file.file.filename}`);

         pet.url_foto = url_foto;
         await pet.save({ fields: ['url_foto'] });

         const directory = './src/app/tmp';

         fs.readdir(directory, (err, files) => {
            if (err) throw err;

            for (const file of files) {
               fs.unlink(path.join(directory, file), err => {
                  if (err) throw err;
               });
            }
         });

         return res.json({ mensagem: 'Foto atualizada com sucesso', url_foto })

      } catch (error) {
         return res.status(400).json(error);
      }
   }
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
}

module.exports = new PetFilter();