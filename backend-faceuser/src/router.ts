import multer, { Multer } from 'multer';
import {Router as RouterExpress} from 'express';

import multerConf from '../src/configs/multerConf';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';

export default class Router{
    router: RouterExpress;
    upload: Multer;

    constructor(){
        this.router = RouterExpress();
        this.upload = multer({storage: multerConf});
    }

    public getAllRouters (): RouterExpress{
        this.UserRouter();
        this.FileRouter();

        return this.router;
    }

    private UserRouter(): void {
        this.router.get("/user", UserController.find);
        this.router.put("/user", UserController.create);
        this.router.post("/user", UserController.edit);
        this.router.delete("/user/:id", UserController.delete);
    }

    private FileRouter(): void {
        this.router.put('/photo', this.upload.single('photo'), FileController.uploadPhoto);
    }

}