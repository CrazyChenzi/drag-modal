const path = require('path')

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: `src/main.ts`,
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  // 生产环境 sourceMap
  productionSourceMap: true,
  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,
    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,
    loaderOptions: {
      less: {},
      sass: {}
    }
  },
  // 第三方插件配置
  pluginOptions: {},
  chainWebpack: config => {},
  configureWebpack: {
    plugins: [],
  }
}
