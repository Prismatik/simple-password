var bcrypt = require('bcrypt');

exports.create = function(pass, salt) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(pass, salt, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

exports.verify = function(pass, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, hash, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};
