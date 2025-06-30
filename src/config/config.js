const env = process.env.NODE_ENV || 'development';

const config = {
  development: { port: 3000 },
  test: { port: 3001 },
  production: { port: process.env.PORT || 80 },
};

module.exports = config[env];
