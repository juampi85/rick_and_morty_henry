const users = require('../utils/users');

const login = (req, res) => {
  const { email, password } = req.query;

  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  return userFound //* poniendo el RETURN acá es como si hiciéramos un IF colocando el RETURN ante cada respuesta
    ? res.status(200).json({ access: true })
    : res.status(403).json({ access: false }); //* si bien pedían un STATUS 200 es más preciso/correcto colocar un STATUS 403
};

module.exports = login;
