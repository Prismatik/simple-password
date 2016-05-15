var bcrypt = require('bcryptjs');
var test = require('tape');
var tapSpec = require('tap-spec');
var password = require('../index');

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout);

const pass = 'batman';
const salt = 10;

test('password.create returns an error with no password', (t) => {
  password.create().catch(e => {
    t.ok(e instanceof Error, e.message);
    t.end();
  });
});

test('password.create returns an error with no salt', (t) => {
  password.create(pass).catch(e => {
    t.ok(e instanceof Error, e.message);
    t.end();
  });
});

test('password.create returns hash of password', (t) => {
  password.create(pass, salt).then(hash => {
    t.ok(hash, 'hash is generated');
    t.end();
  });
});

test('password.verify returns an error with no password', (t) => {
  password.verify().catch(e => {
    t.ok(e instanceof Error, e.message);
    t.end();
  });
});

test('password.verify returns an error with no hash to compare', (t) => {
  password.verify(pass).catch(e => {
    t.ok(e instanceof Error, e.message);
    t.end();
  });
});

test('password.verify returns false if password is refuted', (t) => {
  password.verify(pass, 'maybe?').then(res => {
    t.error(res, 'password refuted');
    t.end();
  });
});

test('password.verify returns true if password is verified', (t) => {
  password.create(pass, salt).then(hash => {
    password.verify(pass, hash).then(res => {
      t.ok(res, 'password verified');
      t.end();
    });
  });
});
