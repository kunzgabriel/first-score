const db = require('../config/db');

const getAllEquipes = async () => {
    let sql = `select * from equipes`;
    let equipes = {};

    await db.query(sql)
        .then(ret =>  equipes = { total: ret.rows.length, equipes: ret.rows })
        .catch(err => equipes = err.stack );

    return equipes;
}

const getEquipeById = async (params) => {
    let sql = `select * from equipes where id = ${params.id}`;
    let equipe = {};

    await db.query(sql)
        .then(ret =>  equipe = { total: ret.rows.length, equipe : ret.rows })
        .catch(err => equipe = err.stack );

    return equipe;
}

const postEquipes = async (params) => {
    params.map(equipe => insertEquipe(equipe));
}

const insertEquipe = async (equipe) => {
    let sql = `insert into equipes (nome, id_game) values ($1, $2)`;
    const { nome, id_game } = equipe;
    await db.query(sql, [ nome, id_game ]);
}

const patchEquipe = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update equipes set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteEquipe = async (params) => {
    const sql = `delete from equipes where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllEquipes = getAllEquipes;
module.exports.postEquipes = postEquipes;
module.exports.patchEquipe = patchEquipe;
module.exports.deleteEquipe = deleteEquipe;
module.exports.getEquipeById = getEquipeById;