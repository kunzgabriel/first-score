let torneiosServices = require('../services/torneios');

const postTorneios = async (req, res, next) => {
    try {
        await torneiosServices.postTorneios(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllTorneios = async (req, res, next) => {
    try {
        await torneiosServices.getAllTorneios()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getTorneioById = async (req, res, next) => {
    try {
        await torneiosServices.getTorneioById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchTorneio = async (req, res, next) => {
    try {
        await torneiosServices.patchTorneio(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteTorneio = async (req, res, next) => {
    try {
        await torneiosServices.deleteTorneio(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllTorneios = getAllTorneios;
module.exports.postTorneios = postTorneios;
module.exports.patchTorneio = patchTorneio;
module.exports.deleteTorneio = deleteTorneio;
module.exports.getTorneioById = getTorneioById;