const jwt = require('jsonwebtoken');
const auth = require('../../config/auth');


module.exports = async (req, res, next)=>{
  const authHeader = req.headers.authorization;

  if(!authHeader)
    return res.status(401).json({erro: 'Token não informado'})

  const parts = authHeader.split(' ');

  if(parts.length !== 2) 
    return res.status(401).json({erro: 'Token errado'});

  const [ bearer, token ] = parts;

  if(!/^Bearer$/i.test(bearer))
    return res.status(401).json({erro: 'Token mal formatado'});

  try {
    const decoded = await jwt.verify(token, auth.secret);
    req.userid = decoded.id;
    return next()

  } catch (error) {
    res.status(401).json({erro: 'Token invalido'});
  }
}