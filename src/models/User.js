const { Schema } = require('pyniedb');
const pyniedb = require('../config/database');

const UserSchema = new Schema({
	name: {
		type: 'string',
	},
	email: {
		type: 'string',
	},
	active: {
		type: 'boolean',
		default: false,
	}
});

const User = pyniedb.Model('User', UserSchema);

module.exports = User;
