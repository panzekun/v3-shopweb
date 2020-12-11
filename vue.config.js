const path = require('path')   //.eslintrc配置 '@typescript-eslint/no-var-requires': 'off',
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    open: true,
    https: false,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: {
    resolve: {
      // 配置解析别名
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@a": path.resolve(__dirname, "./src/assets"),
        "@c": path.resolve(__dirname, "./src/components"),
      },
    },
  }
}