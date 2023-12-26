import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from 'sequelize';

export class Users extends Model<
InferAttributes<Users>,
InferCreationAttributes<Users>
> {
  declare public userid: CreationOptional<number>;
  declare public first_name: string;
  declare public last_name: string;
  declare public username: string;
  declare public password: string;
  declare public is_supervisor: boolean;
  declare public created_at: CreationOptional<Date>;
  declare public updated_at: CreationOptional<Date>;
  declare public deleted_at: Date | null;

  public static initModel(sequelize: Sequelize): typeof Users {
    Users.init({
      /* eslint-disable sort-keys */
      userid: {
        allowNull: false,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      is_supervisor: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
      /* eslint-enable sort-keys */
    }, {
      sequelize,
    });

    return Users;
  }
}
