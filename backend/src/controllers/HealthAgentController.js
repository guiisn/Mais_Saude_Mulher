import User from "../models/UserModel";
import HealthAgent from '../models/HealthAgent';

export default {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'health_agent'},
        });

        return res.json(user);
    },

    async createHealthAgent(req, res) {
        const { user_id } = req.params;
        const { health_agent } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        };

        const health = await HealthAgent.create({
            health_agent,
            user_id,
        });

        return res.json(health);

    }
}