const path = require('path');

module.exports = {
  mode: 'development', // 'production' | 'development' | 'none'
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
