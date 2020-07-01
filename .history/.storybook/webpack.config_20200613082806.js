module.exports = ({ config }) => {
  config.module.rules.push({
    test: /.\tsx$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')]
        }
      },
      require.resolve('react-gendoc-typescript-loader')
    ]
  })
}