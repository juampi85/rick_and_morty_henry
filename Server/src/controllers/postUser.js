const { User } = require('../DB_connection');

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send('Faltan datos');

    const user = await User.findOrCreate({ //* si llegara a CREAR un usuario va devolver, como segundo parámetro, un TRUE --> si lo encuentra DEVUELVE FALSE
      where: { email, password },
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
