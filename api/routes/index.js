const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')
const contas = require('./contasRoute')
const transacoes = require('./transacoesRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   pessoas,
   contas,
   transacoes
   )
 }