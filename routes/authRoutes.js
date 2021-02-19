/* eslint-disable no-undef */
const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // logout
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // get userid
  app.get('/api/current_user', (req, res) => {
    res.send(req.session);
    // res.send(req.user);
  });
};
