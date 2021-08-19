import User from "../models/UserModel";

import setUserAge from '../config/UserAge';

export default {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async listOneUser(req, res) {
        const { sus_card } = req.body;

        const user = await User.findOne({ where: { sus_card } });

        if(!user) {
            return res.status(400).json({ error: "Usuário não encontrado." })
        }

        return res.json(user);
    },

    async createUser(req, res) {
        const userExists = await User.findOne({ where: { sus_card: req.body.sus_card } });

        if (userExists) {
            return res.status(400).json({ error: "Usuário existente" });
        };

        const user_age = parseInt(setUserAge(req.body.birth_date));
        console.log(user_age)

        if (user_age < 24) {
            return res.status(400).json({ error: 'Usuário não está na faixa etária.' })
        };

        const user = await User.create({
            name: req.body.name,
            sus_card: req.body.sus_card,
            cpf: req.body.cpf,
            birth_date: req.body.birth_date,
            age: user_age,
            mother_name: req.body.mother_name,
        });

        return res.json(user);
    }
}