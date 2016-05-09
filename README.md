[![Build Status](https://travis-ci.org/Prismatik/password.svg)](https://travis-ci.org/Prismatik/password)

# Password
Simple password hashing and verification.

## Installation
`npm install promised-pass`

## Usage

To create a password:

```javascript
var password = require('password');

password.create('batman', 10).then(hash => {
	// hash is a salted hash of 'batman'.
});
```

To verify a password:

```javascript
var password = require('password');

// hashed string of 'batman'.
var hashed = '$2a$10$7gE7dtP5u5Cs65QOKZ6WveKHF.UdX2of4J90987mBur8uHdReOgvy';

password.verify('batman', hashed).then(verified => {
	// verify is true|false.
});
```

## Tests
Run `npm test`.
