/* eslint-disable @typescript-eslint/no-require-imports */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#FAAD14' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
