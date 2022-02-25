const path = require("path");
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssLoader = {
	loader: "css-loader",
	options: {
	  minimize: true
	}
  };
var loaders = [
	{
		test: /\.js?$/,
		exclude: /node_modules/,
		loader: "babel-loader"
	},
  	{
    	test: /\.css$/,
    	loader: 'css-loader'
 	 },
  	{
		test: /\.vue?$/,
		loader: "vue-loader",
   		options:{
      		loaders: {
        		css: ExtractTextPlugin.extract({use:[cssLoader]}),
       		}
    	}
	}
];

module.exports = [
	{
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: "vue-advanced-calculator.js",
			library: "VueAdvancedCalculator",
			libraryTarget: "umd"
		},
		module: {
			rules: loaders
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env' : {
					NODE_ENV : '"production"'
				}
			}),
			new ExtractTextPlugin({filename:"vue-advanced-calculator.min.css",  allChunks: true, fallback:"style-loader" }),
		],

	}
];
