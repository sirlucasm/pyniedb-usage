const { default: pyniedb } = require('pyniedb');

pyniedb.connect('pyniedb_usage', {
	path: 'database/'
});

module.exports = pyniedb;
