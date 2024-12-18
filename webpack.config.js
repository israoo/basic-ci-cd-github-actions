const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getFormattedDate } = require('./src/index');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>CI/CD Demo</title>
        </head>
        <body>
            <h1>¡Despliegue exitoso con GitHub Actions el ${getFormattedDate()}!</h1>
            <script src="bundle.js"></script>
        </body>
        </html>
      `
    })
  ]
};
