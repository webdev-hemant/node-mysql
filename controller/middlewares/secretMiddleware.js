const postMiddleware = (req, res, next) => {
  console.log(req.body);
  next();
};

module.exports = { postMiddleware };
