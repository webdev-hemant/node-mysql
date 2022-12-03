const userQuieries = require("../model/users.quiries");

const getSecret = (req, res) => {
  userQuieries.getAllTable(
    (data) => {
      return res.status(200).send({
        message: "success",
        res: data,
      });
    },
    (error) => {
      return res.status(500).send({
        message: "failed",
        error,
      });
    }
  );
};

const postSecret = (req, res) => {
  res.send({ message: {
    success: req.isSucceed,
  } });
}

module.exports = { getSecret, postSecret };
