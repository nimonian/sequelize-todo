const { Sequelize } = require('sequelize')
const path = require('path')

// set up connection to the db
const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite'),
  logging: false
})

// db is the sequelize instance
module.exports = db
