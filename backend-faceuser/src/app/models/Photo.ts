import {DataTypes, Model} from 'sequelize';

export default class Photo extends Model  {
    public file_name!: string;
    public original_name!: string;
    public mimetype!: string;
    public path!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static attributes(): Object{
        return {
            file_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            original_name: {
              type: DataTypes.STRING,
            },
            mimetype: {
              type: DataTypes.STRING,
            },
            path: {
              type: DataTypes.VIRTUAL,
              get(): string {
                // @ts-ignore: Unreachable code error
                return `http://localhost:3333/files/${this.file_name}`;
              }
            },
            created_at: {
              type: DataTypes.DATE,
            },
            updated_at: {
              type: DataTypes.DATE,
            }
        }
    }

}
