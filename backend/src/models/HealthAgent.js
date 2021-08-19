import Sequelize, { Model } from "sequelize";

export default class HealthAgent extends Model {
    static init(sequelize) {
        super.init({
            health_agent: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'health_agent',
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
