const db = require('../config/db');

const getAllTorneios = async () => {
    let sql = `select * from torneios`;
    let torneios = {};

    await db.query(sql)
        .then(ret =>  torneios = { total: ret.rows.length, torneios: ret.rows })
        .catch(err => torneios = err.stack );

    return torneios;
}

const getTorneioById = async (params) => {
    let sql = `select * from torneios where id = ${params.id}`;
    let torneio = {};

    await db.query(sql)
        .then(ret =>  torneio = { total: ret.rows.length, torneio : ret.rows })
        .catch(err => torneio = err.stack );

    return torneio;
}

const postTorneios = async (params) => {
    params.map(torneio => insertTorneio(torneio));
}

const insertTorneio = async (torneio) => {
    let sql = `insert into torneio (nome, data_inicio, data_final, id_game, equipe_vencedora) values ($1, $2, $3, $4, $5)`;
    const { nome, data_inicio, data_final, id_game, equipe_vencedora } = torneio;
    await db.query(sql, [ nome, data_inicio, data_final, id_game, equipe_vencedora ]);
}

const patchTorneio = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update torneios set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteTorneio = async (params) => {
    const sql = `delete from torneio where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllTorneios = getAllTorneios;
module.exports.postTorneios = postTorneios;
module.exports.patchTorneio = patchTorneio;
module.exports.deleteTorneio = deleteTorneio;
module.exports.getTorneioById = getTorneioById;