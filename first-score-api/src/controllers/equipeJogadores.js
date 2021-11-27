let equipeJogadoresService = require('../services/equipeJogadores');

const postEquipeJogadores = async (req, res, next) => {
    try {
        await equipeJogadoresService.postEquipeJogadores(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllEquipeJogadores = async (req, res, next) => {
    try {
        await equipeJogadoresService.getAllEquipeJogadores()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getEquipeJogadorById = async (req, res, next) => {
    try {
        await equipeJogadoresService.getEquipeJogadorById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchEquipeJogador = async (req, res, next) => {
    try {
        await equipeJogadoresService.patchEquipeJogador(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteEquipeJogador = async (req, res, next) => {
    try {
        await equipeJogadoresService.deleteEquipeJogador(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllEquipeJogadores = getAllEquipeJogadores;
module.exports.postEquipeJogadores = postEquipeJogadores;
module.exports.patchEquipeJogador = patchEquipeJogador;
module.exports.deleteEquipeJogador = deleteEquipeJogador;
module.exports.getEquipeJogadorById = getEquipeJogadorById;