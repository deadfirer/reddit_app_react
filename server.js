'user strict'

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer (webpack(config), {
    publicPath : config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stars: {colors : true}
}).listen(8080, (err) => {
    if (err){
        return console.log(err);
    }
    console.log('Listening on http://localhost:8080');
});