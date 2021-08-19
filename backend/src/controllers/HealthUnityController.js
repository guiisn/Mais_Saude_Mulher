import User from "../models/UserModel";
import HealthUnity from '../models/HealthUnity';

export default {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'health_unity'},
        });

        return res.json(user);
    },

    async createHealthUnity(req, res) {
        const { user_id } = req.params;
        const { health_unity } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        };

        const health = await HealthUnity.create({
            health_unity,
            user_id,
        });

        return res.json(health);

    }
}