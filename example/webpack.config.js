module.exports = {
    mode : 'development',
    entry : __dirname + '/index.js',
    output : {
        path : __dirname + '/example',
        filename : 'index.bundle.js',
        publicPath : '/example/'
    },
    module : {
        rules : [
            { test : /\.js$/, loader : 'babel-loader' }
        ]
    }
};
