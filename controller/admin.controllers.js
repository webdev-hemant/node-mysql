const userQuieries = require("../model/users.quiries");

const getSecretController = (req, res) => {
  userQuieries.getAllTableSchema(
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

const postSecretController = (req, res) => {
  return res.send({
    message: {
      success: req.isSucceed,
    },
  });
};

const loginController = (req, res) => {
  userQuieries.loginSchema(req.body, (data) => {
    return res.send({
      success: true,
      data,
    });
  });
};

module.exports = { getSecretController, postSecretController, loginController };
