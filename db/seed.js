const db = require('./db')
const { Todo, User } = require('../models')

async function seed () {

  // ask sqlize to DROP ALL tables and recreate them!
  await db.sync({ force: true })

  // create a new user
  const user = await User.create({
    name: 'Iona'
  })

  // create a todo and assign it
  const todo = await Todo.create({
    description: 'Play with ball'
  })
  user.addTodo(todo)

  // or, user gets magic method!
  user.createTodo({
    description: 'Eat peas'
  })

}

if (process.argv.includes('seed')) {
  seed()
}

module.exports = seed
