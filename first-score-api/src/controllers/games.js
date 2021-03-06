let gamesService = require('../services/games');

const postGames = async (req, res, next) => {
    try {
        await gamesService.postGames(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getAllGames = async (req, res, next) => {
    try {
        await gamesService.getAllGames()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const getGameById = async (req, res, next) => {
    try {
        await gamesService.getGameById(req.params)
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const patchGame = async (req, res, next) => {
    try {
        await gamesService.patchGame(req.body)
            .then(ret => res.status(201).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

const deleteGame = async (req, res, next) => {
    try {
        await gamesService.deleteGame(req.params)
            .then(ret => res.status(204).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllGames = getAllGames;
module.exports.postGames = postGames;
module.exports.patchGame = patchGame;
module.exports.deleteGame = deleteGame;
module.exports.getGameById = getGameById;