import User from '../models/UserModel';
import Address from '../models/AddressModel';

export default {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'address' }
        });

        return res.json(user);
    },

    async createAddress(req, res) {
        const { user_id } = req.params;
        const { name_road, number_road, district } = req.body;

        const user = await User.findByPk(user_id);

        if(!user) {
            return res.status(400).json({ error: 'Usuário não encontrado' });
        }

        const address = await Address.create({
            name_road,
            number_road,
            district,
            user_id,
        });

        return res.json(address);

    }
}