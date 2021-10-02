const gamesController = require('../controllers/games');

module.exports = (app) => {
    app.get('/games', gamesController.getAllGames)
}