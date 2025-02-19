const { Uporabnik, Podjetje } = require('../models');

exports.registracijaPodjetja = async (req, res) => {
  try {
    const { imePodjetja, maticnaSt, davcnaSt, naslov, mesto, postnaSt, drzava, telefonSt, spletnaStran } = req.body;
    const newPodjetje = await Podjetje.create({ imePodjetja, maticnaSt, davcnaSt, naslov, mesto, postnaSt, drzava, telefonSt, spletnaStran });
    res.json(newPodjetje);
  } catch (err) {
    res.status(500).json({ error: 'Unable to register Podjetje' });
  }
};
exports.registracijaUporabnika = async (req, res) => {
  try {
    const { ime, priimek, email, telefonSt, geslo, PodjetjeId, FunkcijaId } = req.body;
    const newUporabnik = await Uporabnik.create({ ime, priimek, email, telefonSt, geslo, PodjetjeId, FunkcijaId });
    res.json(newUporabnik);
  } catch (err) {
    res.status(500).json({ error: 'Unable to register Uporabnik' });
  }
};

// Login and issue JWT and Refresh Token
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email }, include: 'Role' });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, role: user.Role.title }, JWT_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ id: user.id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

    // Set tokens as HttpOnly cookies
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to log in' });
  }
};

// Refresh the access token using a refresh token
exports.refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ error: 'No refresh token provided' });
  }

  try {
    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    const newToken = jwt.sign({ id: decoded.id, role: decoded.role }, JWT_SECRET, { expiresIn: '1h' });

    // Set the new access token as a cookie
    res.cookie('token', newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.json({ message: 'Token refreshed' });
  } catch (err) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
};

exports.checkAuth = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    const result = jwt.verify(token, JWT_SECRET);
    const fullName = await User.findOne({ where: { id: result.id } }).then(user => `${user.firstName} ${user.lastName}`);

    console.log(fullName);
    res.json({ message: 'Authenticated', userId: result.id, fullName });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Logout and clear cookies
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out successfully' });
};
