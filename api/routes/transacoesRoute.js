const { Router } = require('express')
const TransacaoController = require('../controllers/TransacaoController')

const router = Router()

router.get('/transacoes/:idConta/extrato', TransacaoController.consultarExtratoConta)
router.get('/transacoes/extrato/periodo', TransacaoController.consultarExtratoContaPorPeriodo)

 module.exports = router