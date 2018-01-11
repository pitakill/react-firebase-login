var path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias.Constants$ = path.resolve(__dirname, 'src/constants/index.js');
  config.resolve.alias.Components = path.resolve(__dirname, 'src/components/');
  config.resolve.alias.Services = path.resolve(__dirname, 'src/services/');
  config.resolve.extensions = ['.js', '.jsx', '.scss', '.css', '.es6', '.sass'];
  return config;
}
