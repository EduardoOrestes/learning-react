const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ]
};

// entry - onde iniciar, normalmente o arquivo que contem ReactDOM.render
// foi usado o path.resolve() para funcionar em todos os sistemas operacionais
// linux/mac -> / windows -> \

// output - onde vai salvar
// filename foi adicionado o [hash] para resolver problemas de cash, porque sempre que gerar um novo
// faz com que o navegador atualize
