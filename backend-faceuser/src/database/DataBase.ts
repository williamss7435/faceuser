import {Model, ModelAttributes, Options, Sequelize} from 'sequelize';
const databaseConf = require('../configs/databaseConf');

import User from '../app/models/User';
import Photo from '../app/models/Photo';

class Database {
    private connection: Sequelize;

    constructor(){    
        this.connection = new Sequelize(<Options> databaseConf);
        this.configModels();
    }

    private configModels(): void{

        User.init(<ModelAttributes> User.attributes(), {
          sequelize: this.connection
        });

        Photo.init(<ModelAttributes> Photo.attributes(), {
            sequelize: this.connection
        });

        User.belongsTo(this.connection.models.Photo, {foreignKey: 'id_photo', as: 'photo'});
    }

}

export default new Database();