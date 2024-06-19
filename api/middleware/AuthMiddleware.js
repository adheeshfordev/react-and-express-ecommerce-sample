const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

 const  authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader
    console.log(req.headers);
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
      console.log(user);
  
      next()
    })
  }
module.exports = { authenticateToken}