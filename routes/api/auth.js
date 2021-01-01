const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

router.post('/', (req, res) => {
  const { email, username, password } = req.body;

  if ((!email && !username) || !password)
    return res
      .status(400)
      .json({ message: 'Email or Password must be provided' });

  let filter = {};
  if (email) filter = { email };
  else filter = { username };

  User.findOne(filter)
    .then((user) => {
      if (!user)
        return res.status(404).json({ message: 'User does not exists' });
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch)
          jwt.sign(
            { id: user._id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token,
                user: {
                  id: user._id,
                  email: user.email,
                  username: user.username,
                },
              });
            }
          );
        else return res.status(400).json({ message: 'Wrong Credentials' });
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
