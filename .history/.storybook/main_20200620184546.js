module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/preset-create-react-app',
      options: {
        typescriptOptions: {
          reactDocgen: 'react-docgen-typescript',
          reactDocgenTypescriptOptions: {
            propFilter(prop) {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return
            },
          },
        },
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              } else {
                return true
              }
            },
          },
        },
      ],
    })
    config.resolve.extensions.push('.tsx', '.ts')
    return config
  },
}
