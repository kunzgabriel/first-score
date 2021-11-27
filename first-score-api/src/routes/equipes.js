const equipesController = require('../controllers/equipes');

module.exports = (app) => {
    app.get('/equipes', equipesController.getAllEquipes)
    app.get('/equipes/:id', equipesController.getEquipeById)
    app.post('/equipes', equipesController.postEquipes)
    app.patch('/equipes', equipesController.patchEquipe)
    app.delete('/equipes/:id', equipesController.deleteEquipe)
}