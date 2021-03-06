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
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: function (prop) {
              // if (prop.parent) {
              //   console.log(prop.parent.fileName, 'bool')
              //   return !prop.parent.fileName.includes('node_modules')
              // } else {
              //   return true
              // }
              return 'dada'
            }
          }
        },
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve("babel-preset-react-app")]
          }
        },

      ]
    })
    config.resolve.extensions.push('.tsx', '.ts')
    return config
  }
};
