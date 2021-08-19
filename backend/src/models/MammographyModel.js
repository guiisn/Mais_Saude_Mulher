import Sequelize, { Model } from "sequelize";

export default class Mammography extends Model {
    static init(sequelize) {
        super.init({
            last_mammography: Sequelize.STRING,
            nodulo_na_mama: Sequelize.BOOLEAN,
            mama_avaliada_anteriormente: Sequelize.BOOLEAN,
            radio_ou_quimio: Sequelize.BOOLEAN,
            cirurgia: Sequelize.BOOLEAN,
        }, {
            sequelize,
            modelName: 'mammography',
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
