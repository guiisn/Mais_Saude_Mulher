import Sequelize, { Model } from "sequelize";

export default class HealthUnity extends Model {
    static init(sequelize) {
        super.init({
            health_unity: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'health_unity',
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
