const { User } = require('../DB_connection');

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) return res.status(400).send('Faltan datos');

    const user = await User.findOne({
      where: {
        email, //* esto es IGUAL a colocar email: email por OBJECT LITERAL
      },
    });

    if (!user) return res.status(404).send('Usuario no encontrado');

    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(401).send('Contraseña incorrecta'); //* acá cambié el STATUS a 401 porque corresponde a UNAUTHORIZED
  } catch (error) {
    returnres.status(500).json({ error: error.message });
  }
};

module.exports = login;
