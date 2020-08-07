const path = require("path");

module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles/'))
      .set('@', path.join(__dirname, './src/assets/styles/'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        pathRewrite: {
          '^/api': 'mock'
        }
      }
    }
  }
}