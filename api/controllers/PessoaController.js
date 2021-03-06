const database = require('../models')

class PessoaController{

    static async pegarTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch(error){
            return res.status().json(error.message)
        }
    }

    static async pegarUmaPessoa(req, res){
        const { id } = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne( { where: { id: Number(id) } } )
            return res.status(200).json(umaPessoa)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController