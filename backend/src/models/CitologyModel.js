import Sequelize, { Model } from "sequelize";

export default class Citology extends Model {
    static init(sequelize) {
        super.init({
            last_citology: Sequelize.STRING,
            usa_diu: Sequelize.BOOLEAN,
            usa_anticoncepcional: Sequelize.BOOLEAN,
            radio_ou_quimio: Sequelize.BOOLEAN,
            data_menstruacao: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'citology',
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
