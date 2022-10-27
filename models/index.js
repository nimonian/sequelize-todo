const Todo = require('./todo.model')
const User = require('./user.model')

User.hasMany(Todo)
/**
 * user instances get things like .createTodo()
 * and .getTodos()
 * and .addTodo(todo)
 */

Todo.belongsTo(User)
/**
 * todo instance get things like
 * .setUser(user)
 * .getUser()
 */

module.exports = {
  Todo,
  User
}
