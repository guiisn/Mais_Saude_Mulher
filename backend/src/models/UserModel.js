import Sequelize, { Model } from "sequelize";

export default class User extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            cpf: Sequelize.STRING,
            sus_card: Sequelize.STRING,
            birth_date: Sequelize.STRING,
            age: Sequelize.INTEGER,
            mother_name: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'users',
            freezeTableName: true,
            createdAt: false,
            updatedAt: false,
        }
        );
    }

    static associate(models) {
        this.hasOne(models.address, { foreignKey: 'user_id', as: 'address' });
        this.hasOne(models.health_unity, { foreignKey: 'user_id', as: 'health_unity' });
        this.hasOne(models.health_agent, { foreignKey: 'user_id', as: 'health_agent' });
        this.hasOne(models.mammography, { foreignKey: 'user_id', as: 'mammography' });
        this.hasOne(models.citology, { foreignKey: 'user_id', as: 'citology' });
    }
};

