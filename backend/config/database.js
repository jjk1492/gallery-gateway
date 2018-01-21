import config from './index'

const DB = config.get('ABSTRACTION_DB_NAME')
const USER = config.get('ABSTRACTION_DB_USER')
const PASSWORD = config.get('ABSTRACTION_DB_PASS')
const HOST = config.get('ABSTRACTION_DB_HOST')

const development = {
  dialect: 'mysql',
  host: HOST,
  database: DB,
  username: USER,
  password: PASSWORD,
  port: 3306
}

const test = {
  dialect: 'mysql',
  host: HOST,
  database: 'test',
  username: USER,
  password: PASSWORD,
  port: 3306,
  logging: false
}

// Additonal exports so that sequelize-cli can read this config properly
module.exports = {
  development,
  test,
  default: {
    development,
    test
  }
}
