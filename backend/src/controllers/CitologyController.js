import User from "../models/UserModel";
import Citology from '../models/CitologyModel';

export default {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'citology'},
        });

        return res.json(user);
    },

    async createCitology(req, res) {
        const { user_id } = req.params;
        const { 
            last_citology,
            usa_diu,
            usa_anticoncepcional,
            radio_ou_quimio,
            data_menstruacao,
         } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        };

        if (user.age < 24 || user.age > 64) {
            return res.status(400).json({ error: 'Usuário não está na faixa etária.' });
        };

        const health = await Citology.create({
            last_citology,
            usa_diu,
            usa_anticoncepcional,
            radio_ou_quimio,
            data_menstruacao,
        });

        return res.json(health);

    }
}