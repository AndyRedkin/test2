let path = require('path');
let webpack = require('webpack');

/**DEBUG END**/
let entry = {
    // app: path.resolve(__dirname, '../../assets/js/bundles/app.js'),
    'index': path.resolve(__dirname, '../../assets/js/bundles/index.js')
};

module.exports = function (grunt) {
    grunt.config.set('webpack', {
        dev: {
            entry: entry,
            output: {
                path: path.resolve(__dirname, '../../.tmp/public/js/'),
                filename: '[name].js'
            },
            watch: true, // use webpacks watcher
            watchOptions: {
                aggregateTimeout: 300,
                poll: true
            },
            module: {
                loaders: [
                    {
                        test: /\.html$/,
                        loader: 'html-loader'
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2017']
                        }
                    },
                    {
                        test: /\.json$/,
                        loader: 'json-loader'
                    }
                ],
            },
            resolve: {
                extensions: ['.js', '.vue', '.html'],
                modules: [path.resolve(__dirname, '../../assets'), 'node_modules'],
                alias: {
                    'vue$': 'vue/dist/vue.js'
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-webpack');
};
