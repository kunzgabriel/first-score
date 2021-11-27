const db = require('../config/db');

const getAllJogadores = async () => {
    let sql = `select * from jogadores`;
    let jogadores = {};

    await db.query(sql)
        .then(ret =>  jogadores = { total: ret.rows.length, jogadores: ret.rows })
        .catch(err => jogadores = err.stack );

    return jogadores;
}

const getJogadorById = async (params) => {
    let sql = `select * from jogadores where id = ${params.id}`;
    let jogador = {};

    await db.query(sql)
        .then(ret =>  jogador = { total: ret.rows.length, jogador : ret.rows })
        .catch(err => jogador = err.stack );

    return jogador;
}

const postJogador = async (params) => {
    params.map(jogador => insertJogador(jogador));
}

const insertJogador = async (jogador) => {
    let sql = `insert into jogadores (nome, nick, email) values ($1, $2, $3)`;
    const { nome, nick, email } = jogador;
    await db.query(sql, [ nome, nick, email ]);
}

const patchJogador = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update jogadores set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteJogador = async (params) => {
    const sql = `delete from jogadores where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllJogadores = getAllJogadores;
module.exports.postJogador = postJogador;
module.exports.patchJogador = patchJogador;
module.exports.deleteJogador = deleteJogador;
module.exports.getJogadorById = getJogadorById;