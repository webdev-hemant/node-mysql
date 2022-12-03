const { addData } = require("../../model/users.quiries");

const postMiddleware = (req, res, next) => {
  const { name, age } = req.body;

  addData({name, age},(isSucceed)=>{
    req.isSucceed = isSucceed;
    next();
  })
  // console.log(req.body);
};

module.exports = { postMiddleware };
