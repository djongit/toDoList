const pool = require('./database');

export const create = (description) => {
    const psqlCommand = 'INSERT INTO todo (discription) VALUES ($1) RETURNING *';
    const value = [description];
    pool.query(psqlCommand, value);

};

export const get = () => {
    const psqlCommand = 'SELECT * FROM todo';
    const value = [];
    pool.query(psqlCommand, value);
};

export const remove = (id) => {
    const psqlCommand = 'DELETE FROM todo WHERE todo_id = $!';
    value = [id];
    pool.query(psqlCommand, value);
};