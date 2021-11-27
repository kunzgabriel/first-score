const db = require('../config/db');

const getAllTorneioPartidas = async () => {
    let sql = `select * from torneio_partidas`;
    let torneioPartidas = {};

    await db.query(sql)
        .then(ret =>  torneioPartidas = { total: ret.rows.length, torneioPartidas: ret.rows })
        .catch(err => torneioPartidas = err.stack );

    return torneioPartidas;
}

const getTorneioPartidaById = async (params) => {
    let sql = `select * from torneio_partidas where id = ${params.id}`;
    let torneioPartidas = {};

    await db.query(sql)
        .then(ret =>  torneioPartidas = { total: ret.rows.length, torneioPartidas : ret.rows })
        .catch(err => torneioPartidas = err.stack );

    return torneioPartidas;
}

const postTorneioPartidas = async (params) => {
    params.map(torneioPartida => insertTorneioPartida(torneioPartida));
}

const insertTorneioPartida = async (torneioPartida) => {
    let sql = `insert into torneio (descricao, id_torneio, datahora, equipe_1, pontos_equipe_1, equipe_2, pontos_equipe_2) values ($1, $2, $3, $4, $5, $6, $7)`;
    const { descricao, id_torneio, datahora, equipe_1, pontos_equipe_1, equipe_2, pontos_equipe_2 } = torneioPartida;
    await db.query(sql, [ descricao, id_torneio, datahora, equipe_1, pontos_equipe_1, equipe_2, pontos_equipe_2 ]);
}

const patchTorneioPartida = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update torneio_partidas set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteTorneioPartida = async (params) => {
    const sql = `delete from torneio_partidas where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllTorneioPartidas = getAllTorneioPartidas;
module.exports.postTorneioPartidas = postTorneioPartidas;
module.exports.patchTorneioPartida = patchTorneioPartida;
module.exports.deleteTorneioPartida = deleteTorneioPartida;
module.exports.getTorneioPartidaById = getTorneioPartidaById;