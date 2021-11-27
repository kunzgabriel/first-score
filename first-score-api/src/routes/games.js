const gamesController = require('../controllers/games');

module.exports = (app) => {
    app.get('/games', gamesController.getAllGames)
    app.get('/games/:id', gamesController.getGameById)
    app.post('/games', gamesController.postGames)
    app.patch('/games', gamesController.patchGame)
    app.delete('/games/:id', gamesController.deleteGame)
}