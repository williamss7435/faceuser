import {Request, Response} from 'express';
import {Op} from 'sequelize';

import User from '../models/User';
import Photo from '../models/Photo';

class UserController {

    public async find(resquest: Request, response: Response){
        const { q } = resquest.query;

        const where: any = {};

        if(q && q != "")
            where.name = { [Op.iLike]: `%${q}%` };
        
        const users = await User.findAll({
            attributes: ['id', 'name', 'birth_date', 'created_at' ,'updated_at'],
            where,
            include: [{model: Photo, as: 'photo',}],
            order: ['name']
        });

        return response.status(200).json(users);
    }

    public async create(resquest: Request, response: Response){
        const {name, birth_date, id_photo} = resquest.body;

        //Generic Validation
        if(!name || name == ""){
            return response.status(400).json({
                "erro": "nome inválido"
            });
        }
         
        if(!birth_date || birth_date == ""){
            return response.status(400).json({
                "erro": "nome inválido"
            });
        }
        
        const users = await User.create({
            name, birth_date, id_photo
        });

        return response.json(users);
    } 

    public async edit(resquest: Request, response: Response){
        const {id, name, birth_date, id_photo} = resquest.body;

        if(!id || isNaN(Number(id))){
            return response.status(400).json({
                "erro": "id inválido"
            });
        }

        const user = await User.findByPk(id);

        if(!user){
            return response.status(400).json({
                "erro": "usuário não encontrado"
            });
        }
        
        if(name && name != "")
            user.name = name;

        if(birth_date && birth_date != "")
            user.birth_date = birth_date;

        if(id_photo && !isNaN(Number(id_photo)))
            user.id_photo = id_photo;
    
        await user.save();

        return response.json(user);
    } 

    public async delete(resquest: Request, response: Response){
        const {id} = resquest.params;

        if(!id || isNaN(Number(id))){
            return response.status(400).json({
                "erro": "id inválido"
            });
        }

        const user = await User.findByPk(id);

        if(!user){
            return response.status(400).json({
                "erro": "usuário não encontrado"
            });
        }

        await User.destroy({where: {id}});

        return response.json({
            success: true,
        });
    } 
}

export default new UserController();