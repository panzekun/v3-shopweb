module.exports = {
  plugins: {
    'autoprefixer': {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 1 rem =37.5px,已配置自动转化，
      propList: ['*']
    }
  }
}