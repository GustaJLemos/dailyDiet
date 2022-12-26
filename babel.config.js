module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@components': './src/components',
          '@assets': './src/assets',
          '@interfaces': './src/interfaces',
          '@storage': './src/storage',
          '@helpers': './src/helpers',
          '@utils': './src/utils',
        }
      }]
    ]
  };
};
