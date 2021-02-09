const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('../config/key')
passport.use(
  new GoogleStrategy(
  {
    clientID : key.googleClientID,
    clientServer : key.googleClientSecret,
    callbackURL : "/auth/google/callback"
  },
    (accessToken,refreshToken,profile,done)=>{
      console.log('access token :', accessToken)
      console.log('refreshToken :', refreshToken)
      console.log('profile', profile)
    }
  )
)
