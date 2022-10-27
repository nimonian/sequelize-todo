const { User } = require('../models')
const seed = require('../db/seed')

beforeAll(() => seed())

afterAll(() => seed())

describe('A user', () => {

  test('can create a todo', async () => {
    const user = await User.findOne()
    const todo = await user.createTodo({
      description: 'Brush teeth'
    })
    expect(todo.description).toBe('Brush teeth')
    expect(todo.done).toBeFalsy()
    expect(typeof todo.id).toBe('number')
  })

})
