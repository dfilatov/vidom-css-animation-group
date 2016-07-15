var jsLoaders = ['babel'];

module.exports = {
    entry : __dirname + '/index.js',
    output : {
        path : __dirname + '/debug',
        filename : 'index.bundle.js',
        publicPath : '/example/'
    },
    module : {
        loaders: [
            { test : /\.js$/, loaders : jsLoaders }
        ]
    }
};
