const { Router } = require('express')
const ContaController = require('../controllers/ContaController')

const router = Router()

router.post('/contas', ContaController.criarConta)
router.put('/contas/:id/deposito', ContaController.depositarEmUmaConta)
router.put('/contas/:id/saque', ContaController.sacarEmUmaConta)
router.get('/contas/:id/saldo', ContaController.consultarSaldoEmUmaConta)
router.put('/contas/:id/bloquear', ContaController.bloquearUmaConta)




 module.exports = router