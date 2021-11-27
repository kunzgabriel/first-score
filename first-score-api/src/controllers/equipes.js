let equipesService = require('../services/equipes');

const postEquipes = async (req, res, next) => {
    try {
        await equipesService.postEquipes(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllEquipes = async (req, res, next) => {
    try {
        await equipesService.getAllEquipes()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getEquipeById = async (req, res, next) => {
    try {
        await equipesService.getEquipeById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchEquipe = async (req, res, next) => {
    try {
        await equipesService.patchEquipe(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteEquipe = async (req, res, next) => {
    try {
        await equipesService.deleteEquipe(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllEquipes = getAllEquipes;
module.exports.postEquipes = postEquipes;
module.exports.patchEquipe = patchEquipe;
module.exports.deleteEquipe = deleteEquipe;
module.exports.getEquipeById = getEquipeById;