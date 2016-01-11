'use strict';

module.exports = (languages) => {
  return (req, res, next) => {
    req.dlanguage = req.dlanguage || req.acceptsLanguages(languages) || languages[0];
    next();
  };
};
