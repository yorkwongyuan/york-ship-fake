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
        require.resolve('react-docgen-typescript-loader'),
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
