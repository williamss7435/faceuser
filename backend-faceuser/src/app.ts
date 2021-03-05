import express,{Express} from 'express';
import cors from 'cors';
import path from 'path';
import Database from './database/DataBase';

import Router from './router';

export default class App{
    private app: Express;
    private router: Router;

    constructor(port: number){
        this.app = express();
        this.router = new Router();

        this.configApp();
        this.startDatabase();

        this.app.listen(port);
    }

    private configApp(): void {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(this.router.getAllRouters());
        this.app.use('/files', express.static(
            path.resolve(__dirname, '..', 'tmp', 'photo_database'),
        ));
    }

    private startDatabase():void {
        Database;
    }

}