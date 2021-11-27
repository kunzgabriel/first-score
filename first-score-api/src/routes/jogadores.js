const jogadoresController = require('../controllers/jogadores');

module.exports = (app) => {
    app.get('/jogadores', jogadoresController.getAllJogadores)
    app.get('/jogadores/:id', jogadoresController.getJogadorById)
    app.post('/jogadores', jogadoresController.postJogadores)
    app.patch('/jogadores', jogadoresController.patchJogador)
    app.delete('/jogadores/:id', jogadoresController.deleteJogador)
}