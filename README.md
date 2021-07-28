# PynieDB Usages

_**thank you for use**_

## Basics commands
- pyniedb
	- connect(dbName: string, options: { path: string })
	- Model(modelName: string, schema: SchemaObject)
- Schema(schemaData: object)
- Models
	- Model.create(data: object)
	- Model.findAll()
	- Model.find(param: string, value: any)
	- Model.delete(param: string, value: any)
## Usages

1. setting up
	```js
	const { default: pyniedb } = require('pyniedb');

	pyniedb.connect('pyniedb_usage', {
	    path: `${__dirname}/database` // your preferred path
	});

	module.exports = pyniedb;
	```
2. creating model
	```js
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
	        default: false, // setting 'default' and then the value
	    }
	});

	const User = pyniedb.Model('User', UserSchema);

	module.exports = User;
	```
3. consuming Model by controller
	```js
	const User = require('../models/User'); // the created model

	module.exports = {
	    index: async (req, res) => { // list all Users
	        const users = await User.findAll();
	        res.json(users);
	    },

        create: async (req, res) => { // create User
            const user = await User.create(req.body);
            res.status(201).json(user);
	    },
	}
	```
