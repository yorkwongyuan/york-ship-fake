module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]]
          }
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            shouldExtractLiteralValuesFromEnum: false,
            propFilter: (prop) => {
              // if (prop.parent) {
              //   console.log(prop.parent.fileName, 'bool')
              //   return !prop.parent.fileName.includes('node_modules')
              // } else {
              //   return true
              // }
              return false
            }
          }
        }
      ]
    })
    config.resolve.extensions.push('.tsx', '.ts')
    return config
  }
};
