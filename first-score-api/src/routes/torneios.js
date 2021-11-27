const torneiosController = require('../controllers/torneios');

module.exports = (app) => {
    app.get('/torneios', torneiosController.getAllTorneios)
    app.get('/torneios/:id', torneiosController.getTorneioById)
    app.post('/torneios', torneiosController.postTorneios)
    app.patch('/torneios', torneiosController.patchTorneio)
    app.delete('/torneios/:id', torneiosController.deleteTorneio)
}