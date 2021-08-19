import Sequelize, { Model } from "sequelize";

export default class Address extends Model {
    static init(sequelize) {
        super.init({
            name_road: Sequelize.STRING,
            number_road: Sequelize.INTEGER,
            district: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'address',
            freezeTableName: true,
            createdAt: false,
            updatedAt: false,
        }
        );
    }

    static associate(models) {
        this.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
    };
};
