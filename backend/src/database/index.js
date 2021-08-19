import Sequelize from 'sequelize';

import User from '../models/UserModel';
import Address from '../models/AddressModel';
import HealthUnity from '../models/HealthUnity';
import HealthAgent from '../models/HealthAgent';
import Mammography from '../models/MammographyModel';
import Citology from '../models/CitologyModel';

import databaseConfig from '../config/database';

const models = [User, Address, HealthUnity, HealthAgent, Mammography, Citology];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));

        User.associate(this.connection.models);
        Address.associate(this.connection.models);
    }
}

export default new Database();