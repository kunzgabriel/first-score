let torneioPartidasServices = require('../services/torneioPartidas');

const postTorneioPartidas = async (req, res, next) => {
    try {
        await torneioPartidasServices.postTorneioPartidas(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllTorneioPartidas = async (req, res, next) => {
    try {
        await torneioPartidasServices.getAllTorneioPartidas()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getTorneioPartidaById = async (req, res, next) => {
    try {
        await torneioPartidasServices.getTorneioPartidaById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchTorneioPartida = async (req, res, next) => {
    try {
        await torneioPartidasServices.patchTorneioPartida(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteTorneioPartida = async (req, res, next) => {
    try {
        await torneioPartidasServices.deleteTorneioPartida(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllTorneioPartidas = getAllTorneioPartidas;
module.exports.postTorneioPartidas = postTorneioPartidas;
module.exports.patchTorneioPartida = patchTorneioPartida;
module.exports.deleteTorneioPartida = deleteTorneioPartida;
module.exports.getTorneioPartidaById = getTorneioPartidaById;