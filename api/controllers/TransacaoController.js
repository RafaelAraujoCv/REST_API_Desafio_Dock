const Sequelise = require('sequelize')
const Op = Sequelise.Op
const database = require('../models')

class TransacaoController{

    static async consultarExtratoConta(req, res){ //OK
        const { idConta } = req.params
        try{
            const extratoConta = await database.Transacoes.findAll( { where: { idConta: Number(idConta) } } )
            return res.status(200).json(extratoConta)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async consultarExtratoContaPorPeriodo(req, res){ //OK
        const { data_inicial, data_final } = req.query
        try{
            const extratoPorPeriodo = await database.Transacoes.findAll( {
                 where: {
                    dataTransacao: {
                        [Op.between]: [data_inicial, data_final]
                    }
                  }
                } )
            return res.status(200).json(extratoPorPeriodo)
        } catch(error){
            return res.status(500).json(error.messages)
        }
    }
    
}

module.exports = TransacaoController