const pool = require("./db");

const getAllTable = (response, error) => {
  pool.query("SELECT * FROM atable", function (err, rows, fields) {
    if (err) return error(err);
    response(rows)
  });
};

const addData = (data, response, error) => {
  pool.query("INSERT INTO atable SET ?", data, (err, res) => {
    if (err) return error(err);
    response(Boolean(data));
  });
};

module.exports = { getAllTable, addData };
