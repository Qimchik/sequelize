module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite",
    define: {
      timestamps: false
    }
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: 'dimab_cdp_2',
    password: 'yQSvlBQadT',
    database: 'dimab_cdp_2',
    host: '185.255.96.5',
    dialect: 'mysql',
    define: {
      timestamps: false
    }
  }
};
