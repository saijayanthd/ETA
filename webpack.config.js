var config = {
             entry: './main.js',
			mode:'development',
             output: {
                       path:'/',
                       filename: 'index.js',
                     },
	
             devServer: {
                          inline: true,
                          port: 1111
                        },
	
             module: {
                      rules: [ {
                      test: /\.jsx?$/,
                      exclude: /node_modules/,
                      loader: 'babel-loader',
			          query: {
                              presets: ['es2015', 'react']
                             }
                            },
                {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
      }]
                    },
	
            }

module.exports = config;