const userQuieries = require("../../model/users.quiries");

const postMiddleware = (req, res, next) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
  };

  userQuieries.addDataSchema(data, (isSucceed) => {
    req.isSucceed = isSucceed;
    next();
  });
};

module.exports = { postMiddleware };
