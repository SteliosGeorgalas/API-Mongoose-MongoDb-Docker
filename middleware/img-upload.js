const multer = require('multer');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg'
}

//Multer accepts an options object
const fileUpload = multer({
    //Limits of the uploaded data in bytes
    limits: 500000,

    //most basic is dest or storage property, tells Multer where to upload files
    // if we omit this files will be kept in memory (not stored in disk)
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `./uploads`);
        },

        filename: (req, file, cb) => {
            //originalname Name of the file on the user's computer
            cb(null, file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
        //file.mimetype :Mime type of the file
        //The in operator returns true if a s property exists in an object else false.
        const isValid = file.mimetype in MIME_TYPE_MAP;
        //conditional operator that assigns a value to a variable
        //based on some condition. variablename = (condition) ? value1 : value2
        let error = isValid ? null : new Error('Invalid mime type!');
        cb(error, isValid);
    }
});

module.exports = fileUpload.single('photo');