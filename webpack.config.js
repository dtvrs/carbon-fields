module.exports = {
	// There are the "entry points" to our application.
	// This means they wll be the "root" import that are included in JS bundle.
	entry: [
		'./assets/react/bootstrap.js'
	],

	// Setup the output.
	output: {
		// The output directory.
		path: 'assets/',

		// This is the JS bundle containing code from the entry points.
		filename: 'bundle.js'
	},

	// Setup the transformation of the modules.
	module: {
		loaders: [
			// Process JS with Babel.
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					// Enable caching results for faster rebuilds.
					cacheDirectory: true
				}
			}
		]
	},

	// Faster sourcemaps without column mappings.
	devtool: 'cheap-module-source-map'
};
