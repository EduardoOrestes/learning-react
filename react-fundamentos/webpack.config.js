const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        // aqui adiciona uma exceção dos arquivos que o babel loader nao vai executar
        // nesse caso, adiciona uma exceção no folder node_modules
        exclude: /node_modules/,
        use: 'babel-loader',
      }, {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // o css modules - ajuda a não ter conflito de classes CSS,
              // ele gera uma HASH para cada classe, assim as classes nunca se repetirão
              modules: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000
  }
};

// entry - onde iniciar, normalmente o arquivo que contem ReactDOM.render
// foi usado o path.resolve() para funcionar em todos os sistemas operacionais
// linux/mac -> / windows -> \

// output - onde vai salvar
// filename foi adicionado o [hash] para resolver problemas de cash, porque sempre que gerar um novo
// faz com que o navegador atualize
