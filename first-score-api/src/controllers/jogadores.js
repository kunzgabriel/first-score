let jogdoresService = require('../services/jogadores');

const postJogadores = async (req, res, next) => {
    try {
        await jogdoresService.postJogadores(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllJogadores = async (req, res, next) => {
    try {
        await jogdoresService.getAllJogadores()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getJogadorById = async (req, res, next) => {
    try {
        await jogdoresService.getJogadorById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchJogador = async (req, res, next) => {
    try {
        await jogdoresService.patchJogador(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteJogador = async (req, res, next) => {
    try {
        await jogdoresService.deleteJogador(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllJogadores = getAllJogadores;
module.exports.postJogadores = postJogadores;
module.exports.patchJogador = patchJogador;
module.exports.deleteJogador = deleteJogador;
module.exports.getJogadorById = getJogadorById;