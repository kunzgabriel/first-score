const equipeJogadoresController = require('../controllers/equipeJogadores');

module.exports = (app) => {
    app.get('/equipeJogadores', equipeJogadoresController.getAllEquipeJogadores)
    app.get('/equipeJogadores/:id', equipeJogadoresController.getEquipeJogadorById)
    app.post('/equipeJogadores', equipeJogadoresController.postEquipeJogadores)
    app.patch('/equipeJogadores', equipeJogadoresController.patchEquipeJogador)
    app.delete('/equipeJogadores/:id', equipeJogadoresController.deleteEquipeJogador)
}