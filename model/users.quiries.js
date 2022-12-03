const pool = require("./db");

const getAllTable = (response, error) => {
  return pool.query("SELECT * FROM atable", function (err, rows, fields) {
    if (err) return error(err);
    response(rows)
  });
};

const addData = (data, result) => {
  pool.query("INSERT INTO atable SET ?", data, (err, res) => {
    if (err) throw err;
    result(Boolean(data));
  });
};

module.exports = { getAllTable, addData };
