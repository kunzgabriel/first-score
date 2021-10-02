const db = require('../config/db');

const getAllGames = async () => {
    let sql = 'select * from games';
    let games = {};
    await db.query(sql)
        .then(ret => games = { total: ret.rows.length, games: ret.rows })
        .catch(err => games = err.stack);

    return games;
}

module.exports.getAllGames = getAllGames;