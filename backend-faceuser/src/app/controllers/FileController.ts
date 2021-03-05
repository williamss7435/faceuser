import {Request, Response} from 'express';

import Photo from '../models/Photo';

class FileController {

    public async uploadPhoto(resquest: Request, response: Response){
        const {filename, originalname, mimetype } = resquest.file;

        const photo = await Photo.create({
            file_name: filename,
            original_name: originalname,
            mimetype,
        })

        return response.json(photo);
    }

}

export default new FileController();