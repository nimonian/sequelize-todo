const db = require('../db/db')
const { DataTypes, Model } = require('sequelize')

class User extends Model { }

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize: db })

module.exports = User
