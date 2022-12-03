const { addData } = require("../../model/users.quiries");

const postMiddleware = (req, res, next) => {
  const data = { name: req.body.name, age: req.body.age };

  addData(
    data,
    (isSucceed) => {
      req.isSucceed = isSucceed;
      next();
    }
  );
};

module.exports = { postMiddleware };
