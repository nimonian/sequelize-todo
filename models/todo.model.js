const db = require('../db/db')
const { DataTypes, Model } = require('sequelize')

class Todo extends Model { }

Todo.init({
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, { sequelize: db })

module.exports = Todo
