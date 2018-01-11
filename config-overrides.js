var path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias.Actions$ = path.resolve(__dirname, 'src/actions/index.js');
  config.resolve.alias.Constants$ = path.resolve(__dirname, 'src/constants/index.js');
  config.resolve.alias.Components = path.resolve(__dirname, 'src/components/');
  config.resolve.alias.Helpers$ = path.resolve(__dirname, 'src/helpers/index.js');
  config.resolve.alias.PR = path.resolve(__dirname, 'src/');
  config.resolve.alias.Reducers$ = path.resolve(__dirname, 'src/reducers/index.js');
  config.resolve.alias.Services = path.resolve(__dirname, 'src/services/');
  config.resolve.extensions = ['.js', '.jsx', '.scss', '.css', '.es6', '.sass'];
  return config;
}
