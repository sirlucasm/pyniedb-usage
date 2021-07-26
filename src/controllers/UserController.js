const User = require('../models/User');

module.exports = {
	index: async (req, res) => {
		const users = await User.findAll();

		res.json(users);
	},

	create: async (req, res) => {
		const user = await User.create(req.body);

		res.status(201).json(user);
	},

	show: async (req, res) => {
		const { id } = req.params;
		const user = await User.find('id', id);

		if (!user) res.status(404).json({ message: 'user not found' });

		res.json(user);
	},

	delete: async (req, res) => {
		const { id } = req.params;
		await User.delete('id', id);

		res.status(200).send();
	}
}
