import {extname, resolve} from 'path';
import Crypto from 'crypto';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, resolve(__dirname, '..', '..', 'tmp', 'photo_database'));
    },
    filename(req, file, cb) {
        Crypto.randomBytes(16, (err, res) => {
          if (err) cb(null, '');
  
          return cb(null, res.toString('hex') + extname(file.originalname));
        });
    }
});

export default storage;