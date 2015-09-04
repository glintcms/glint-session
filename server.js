var session = require('express-session');
var merge = require('utils-merge');
var debug = require('debug')('glint:session');
var GlintStore = require('session-glint')(session);
var c = require('./config');

exports = module.exports = function (app, adapter, sessionOptions) {

  if (app.glintSession) return app.glintSession;

  if (sessionOptions) merge(c.sessionOptions, sessionOptions);
  c.sessionOptions.store = GlintStore({adapter: adapter});

  var sessionStore = session(c.sessionOptions);

  app.use(sessionStore);
  app.glintSession = sessionStore;

  return sessionStore;

};



