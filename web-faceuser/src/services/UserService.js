import DateUtil from '../utils/DateUtil';
import Connection from './class/Connection';

class UserService extends Connection {
    
    constructor(){
        super('http://localhost:3333')
    }

    async find(query = null){
        let url = '/user';
        if(query) url += `?q=${query}`;

        const response =  await this.AsyncGet(url);

        if(response.success){
            response.data = this.formatUserData(response.data);
        }

        return response;
    }

    formatUserData(data){
        return data.map(user => { return {
            ...user,
            birth_date: DateUtil.YearMouthDay(user.birth_date),
            birth_date_formatted: DateUtil.DayMouthYear(user.birth_date)
        }});
    }

    async save(user){
        return await this.AsyncPut('/user', user);
    }

    async update(user){
        return await this.AsyncPost('/user', user);
    }
    
    async delete(id){
        return await this.AsyncDelete(`user/${id}`, null);
    }


}

export default new UserService();