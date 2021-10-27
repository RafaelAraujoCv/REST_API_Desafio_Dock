const database = require('../models')

class ContaController{

    static async criarConta(req, res){ //OK
        const criaConta = req.body
        try{
            const novaContaCriada = await database.Contas.create(criaConta)
            return res.status(200).json(novaContaCriada)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async depositarEmUmaConta(req, res){ //OK
        const { id } = req.params
        const valorDeposito = req.body
        try{
            const contaAtual = await database.Contas.findOne( { where: { id: Number(id) } } )
            const novoSaldoDeposito = contaAtual.saldo + valorDeposito.saldo
            /*if(valorDeposito.saldo < contaAtual.limiteSaqueDiario){
                return res.status(500).json(`Limite de saque diario é de ${contaAtual.limiteSaqueDiario}`)
            }*/
            await database.Contas.update( {saldo: novoSaldoDeposito}, { where: { id: Number(id) } } )
            await database.Transacoes.create( { idConta: id, valor: '+' + valorDeposito.saldo, dataTransacao: new Date() })
            
            return res.status(200).json(`Deposito de R$ ${valorDeposito.saldo} concluido. Saldo em conta: R$ ${novoSaldoDeposito}`)
        } catch(erro){
            return res.status(500).json(error.message)
        }
    }

    static async sacarEmUmaConta(req, res){ //OK
        const { id } = req.params
        const valorSaque = req.body
        try{
            const contaAtual = await database.Contas.findOne( { where: { id: Number(id) } } )
            const novoSaldoSaque = contaAtual.saldo - valorSaque.saldo
            await database.Contas.update( {saldo: novoSaldoSaque}, { where: { id: Number(id) } } )
            await database.Transacoes.create( { idConta: id, valor: '-' + valorSaque.saldo, dataTransacao: new Date() })
            
            return res.status(200).json(`Saque de R$ ${valorSaque.saldo} concluido. Saldo em conta: R$ ${novoSaldoSaque}`)
        } catch(erro){
            return res.status(500).json(error.message)
        }
    }

    static async consultarSaldoEmUmaConta(req, res){ //OK
        const { id } = req.params
        try{
            const saldoEmConta = await database.Contas.findOne( { where: { id: Number(id) } } )
            return res.status(500).json(`Saldo em conta: R$ ${saldoEmConta.saldo}`)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async bloquearUmaConta(req, res){ //OK
        const { id } = req.params
        try{
            await database.Contas.update( { flagAtivo: 0 }, { where: { id: Number(id) } } )
            return res.status(200).json(`Conta de id ${id} bloqueado!`)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ContaController