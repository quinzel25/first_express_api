module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}
// creates proxy server connection, VUE server and NODE server must be running at the same time in order to function properly