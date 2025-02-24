const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/app.ts', // 入口文件，指向 Express 服务器的主文件
  target: 'node', // 告诉 Webpack 目标环境是 Node.js
  externals: [nodeExternals()], // 排除 `node_modules`，不打包第三方依赖
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'app.js' // 打包后生成的文件
  },
  resolve: {
    extensions: ['.ts', '.js'], // 允许导入 TypeScript 和 JavaScript 文件
    alias: {
      '@qf/schema': path.resolve(__dirname, '../../packages/schema/src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              rootDir: path.resolve(__dirname, '../..'), // 设置根目录为整个 monorepo
              composite: false
            }
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  externals: [
    nodeExternals({
      allowlist: ['@qf/schema'] // 将workspace包加入白名单
    })
  ],
  experiments: {
    topLevelAwait: true
  },
  mode: 'production' // 生产模式，优化打包体积
}
