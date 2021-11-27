const torneioPartidasController = require('../controllers/torneioPartidas');

module.exports = (app) => {
    app.get('/torneioPartidas', torneioPartidasController.getAllTorneioPartidas)
    app.get('/torneioPartidas/:id', torneioPartidasController.getTorneioPartidaById)
    app.post('/torneioPartidas', torneioPartidasController.postTorneioPartidas)
    app.patch('/torneioPartidas', torneioPartidasController.patchTorneioPartida)
    app.delete('/torneioPartidas/:id', torneioPartidasController.deleteTorneioPartida)
}