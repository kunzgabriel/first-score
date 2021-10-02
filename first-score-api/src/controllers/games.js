const GamesService = require('../services/games');

const getAllGames = async(req, res, next) => {
    try {
        await GamesService.getAllGames()
            .then(ret => res.status(200).send(ret))
            .catch(err => res.status(500).send(err));
    } catch (err) {
        next(err);
    }
}

module.exports.getAllGames = getAllGames;