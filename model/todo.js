const pool = require('./database');

const create = (description) => {
    const psqlCommand = 'INSERT INTO todo (description) VALUES ($1) RETURNING *';
    const value = [description];
    return pool.query(psqlCommand, value);

};

const get = () => {
    const psqlCommand = 'SELECT * FROM todo';
    const value = [];
    return pool.query(psqlCommand, value);
};

const remove = (id) => {
    const psqlCommand = 'DELETE FROM todo WHERE todo_id = $1';
    const value = [id];
    return pool.query(psqlCommand, value);
};

module.exports = { create, get, remove };



