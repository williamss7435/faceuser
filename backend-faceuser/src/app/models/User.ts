import {DataTypes, Model} from 'sequelize';

export default class User extends Model  {
    public name!: string;
    public birth_date!: Date;
    public id_photo!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static attributes(): Object{
        return {
          name: {
            type: DataTypes.STRING,
          },
          birth_date: {
            type: DataTypes.DATE,
          },
          id_photo: {
            type: DataTypes.INTEGER,
          },
          created_at: {
            type: DataTypes.DATE,
          },
          updated_at: {
            type: DataTypes.DATE,
          },
        }
    }

}
