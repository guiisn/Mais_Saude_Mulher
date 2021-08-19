import User from "../models/UserModel";
import Mammography from '../models/MammographyModel';

export default {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'mammography'},
        });

        return res.json(user);
    },

    async createMammography(req, res) {
        const { user_id } = req.params;
        const { 
            last_mammography,
            nodulo_na_mama,
            mama_avaliada_anteriormente,
            radio_ou_quimio,
            cirurgia,
         } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        };

        if (user.age < 50 || user.age > 69) {
            return res.status(400).json({ error: 'Usuário não está na faixa etária.' });
        };

        const health = await Mammography.create({
            last_mammography,
            nodulo_na_mama,
            mama_avaliada_anteriormente,
            radio_ou_quimio,
            cirurgia,
            user_id,
        });

        return res.json(health);

    }
}