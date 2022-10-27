const { User } = require('../models')

async function main () {

  const user = await User.findOne({ where: { name: 'Iona' } })
  console.log(user.toJSON())

  // querying is easy! all the foreign key madness is abstracted away
  const myTodos = await user.getTodos()
  console.log(myTodos.map(d => d.toJSON()))

}

main()
