/**
 * Created by mrlef on 1/9/2017.
 */

module.exports = {
    entry: "./entry.js",
    watch: true,
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};