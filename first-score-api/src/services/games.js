const db = require('../config/db');

const getAllGames = async () => {
    let sql = `select * from games`;
    let games = {};

    await db.query(sql)
        .then(ret =>  games = { total: ret.rows.length, games: ret.rows })
        .catch(err => games = err.stack );

    return games;
}

const getGameById = async (params) => {
    let sql = `select * from games where id = ${params.id}`;
    let game = {};

    await db.query(sql)
        .then(ret =>  game = { total: ret.rows.length, game : ret.rows })
        .catch(err => game = err.stack );

    return game;
}

const postGames = async (params) => {
    params.map(game => insertGame(game));
}

const insertGame = async (game) => {
    let sql = `insert into games (nome) values ($1)`;
    const { nome } = game;
    await db.query(sql, [ nome ]);
}

const patchGame = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update games set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteGame = async (params) => {
    const sql = `delete from games where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllGames = getAllGames;
module.exports.postGames = postGames;
module.exports.patchGame = patchGame;
module.exports.deleteGame = deleteGame;
module.exports.getGameById = getGameById;