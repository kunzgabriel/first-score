const { Pool } = require('pg');

const pool = new Pool({
    user: 'admin',
    host: 'first-score-db',
    database: 'first-score-db',
    password: 'f4c1ld3m41s',
    port: 5432
});

module.exports = { query: (text, params) => pool.query(text, params) };