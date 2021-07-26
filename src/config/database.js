const { default: pyniedb } = require('pyniedb');

pyniedb.connect('pyniedb_usage', {
	path: `${__dirname}/database`
});

module.exports = pyniedb;
