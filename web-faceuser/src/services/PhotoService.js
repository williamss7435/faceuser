import Connection from './class/Connection';

class PhotoService extends Connection {
    
    constructor(){
        super('http://localhost:3333')
    }

    async upload(photo = new FileList()){
        
        const formData = new FormData();
        for(let i = 0; i < photo.length; i++){
            formData.append('photo', photo[i]);
        }
        
        return await this.AsyncPut('/photo', formData);
    }

}

export default new PhotoService();