const keyFileName = "../config/miaudote-c4d26-firebase-adminsdk-conjh-fe7c634d20.json";
const projectId = "miaudote-c4d26";
const bucketName = `${projectId}.appspot.com`;
const admin = require('firebase-admin');

const mime = require('mime');

var serviceAccount = require("../config/miaudote-c4d26-firebase-adminsdk-conjh-fe7c634d20.json");

admin.initializeApp({
   credential: admin.credential.cert(serviceAccount),
   storageBucket: "miaudote-c4d26.appspot.com"
});

const bucket = admin.storage().bucket(bucketName);

module.exports = {
   async upload(local, destination) {
      const filePath = local;
      const uploadTo = destination;
      const fileMime = mime.getType(filePath);
      const url = null;

      try {
         await bucket.upload(filePath, {
            destination: uploadTo,
            public: true,
            metadata: {
               contentType: fileMime,
               cacheControl: "public, max-age=300"
            },
         })

         return createPublicFileURL(uploadTo);
      } catch (error) {
         console.log(error);
         return;
      };
   },
   async delete(filePath) {
      try {
         const file = await bucket.file(filePath);
         await file.delete((err, apiResponse) => {
            if(err){
               console.log(err);
               return;
            }
            return true;
         })
      } catch (error) {
         console.log(error);
         return false;
      }
   }
}


function createPublicFileURL(storageName) {
   return `http://storage.googleapis.com/${bucketName}/${encodeURIComponent(storageName)}`
}
