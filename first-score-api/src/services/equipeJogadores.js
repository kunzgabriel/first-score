const db = require('../config/db');

const getAllEquipeJogadores = async () => {
    let sql = `select * from equipe_jogadores`;
    let equipeJogadores = {};

    await db.query(sql)
        .then(ret =>  equipeJogadores = { total: ret.rows.length, equipeJogadores: ret.rows })
        .catch(err => equipeJogadores = err.stack );

    return equipeJogadores;
}

const getEquipeJogadorById = async (params) => {
    let sql = `select * from equipe_jogadores where id = ${params.id}`;
    let equipeJogador = {};

    await db.query(sql)
        .then(ret =>  equipeJogador = { total: ret.rows.length, equipeJogador : ret.rows })
        .catch(err => equipeJogador = err.stack );

    return equipeJogador;
}

const postEquipeJogadores = async (params) => {
    params.map(equipeJogador => insertEquipeJogador(equipeJogador));
}

const insertEquipeJogador = async (equipeJogador) => {
    let sql = `insert into equipe_jogadores (id_equipe, id_jogador) values ($1, $2)`;
    const { id_equipe, id_jogador } = equipeJogador;
    await db.query(sql, [ id_equipe, id_jogador ]);
}

const patchEquipeJogador = async (params) => {
    let fields = [];
    Object.keys(params).map(p => p).forEach(e => e !== 'id' && fields.push(`${e} = '${params[e]}'`));
    fields = fields.join(', ');
    const sql = `update equipe_jogadores set ${fields} where id =  ${params.id}`;
    await db.query(sql);
}

const deleteEquipeJogador = async (params) => {
    const sql = `delete from equipe_jogadores where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllEquipeJogadores = getAllEquipeJogadores;
module.exports.postEquipeJogadores = postEquipeJogadores;
module.exports.patchEquipeJogador = patchEquipeJogador;
module.exports.deleteEquipeJogador = deleteEquipeJogador;
module.exports.getEquipeJogadorById = getEquipeJogadorById;