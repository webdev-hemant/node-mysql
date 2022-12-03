const pool = require("./db");

const getAllTableSchema = (response, error) => {
  pool.query("SELECT * FROM atable", function (err, rows, fields) {
    if (err) return error(err);
    response(rows);
  });
};

const addDataSchema = (data, response, error) => {
  pool.query("INSERT INTO atable SET ?", data, (err, res) => {
    if (err) return error(err);
    response(Boolean(data));
  });
};

const loginSchema = (data, response, error) => {
  const { name, password } = data;
  pool.query("select * from atable WHERE name = ?", name, (err, res) => {
    if (err) return error(err);
    response(res);
  });
};

module.exports = { getAllTableSchema, addDataSchema, loginSchema };
