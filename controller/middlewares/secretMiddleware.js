const userQuieries = require("../../model/users.quiries");

const postMiddleware = (req, res, next) => {
  const data = { name: req.body.name, age: req.body.age };

  userQuieries.addDataSchema(data, (isSucceed) => {
    req.isSucceed = isSucceed;
    next();
  });
};

module.exports = { postMiddleware };
