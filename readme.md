# Sequelize!

## Setup

```
npm init
npm i sqlite3 sequelize
```

To set up a new connection in memory,
```js
// db.js
const { Sequelize } = require('sequelize')


const db = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false
})

module.exports = db
```
This does not create a database file on your computer.

If you want to make a database file, do this instead:
```js
// db.js
const Sequelize = require('sequelize')
const path = require('path')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db.sqlite'),
  logging: false
})

module.exports = db
```
The business with `path.join()` is necessary because otherwise the db file would get created relative to the position where the db function is being called, not relative to the `db.js` file, so you get a bunch of db files all over the place with partial data!

## Seeding data

Make a `seed.js` file next to `db.js` and have a `seed()` function which sets up the tables and inserts some dummy data.

Good idea to add a `"seed": "cd db && node seed.js"` script to `package.json` so you can `npm run seed` to reset the database whenever needed.

To seed with raw SQL, this will work:
```js
async function seed () {

  await db.query(`DROP TABLE IF EXISTS todo`)
  await db.query(`CREATE TABLE IF NOT EXISTS todo(
    id INTEGER PRIMARY KEY,
    text TEXT,
    done INTEGER
  );`)
  await db.query(`INSERT INTO todo (text, done) VALUES ("wash car", 0);`)
  await db.query(`INSERT INTO todo (text, done) VALUES ("dog vaccines", 1);`)
  await db.query(`INSERT INTO todo (text, done) VALUES ("eat food", 0);`)

}

seed()
```

## Using models

To do CRUD with models:
```js
async function seed () {

  // ask sqlize to DROP ALL tables and recreate them!
  await db.sync({ force: true })

  await Todo.create({
    description: 'Wash the dog',
    done: false
  })

  await Todo.create({
    description: 'Vaccinate the car'
  })

  const todo1 = await Todo.findByPk(1)

  await todo1.update({
    done: true
  })

  // await todo1.destroy() will delete

  // Todo.findOne({ where: { done: true } }) will return the first matched row

  const done = await Todo.findAll({ where: { done: true } })
  console.log(done.map(d => d.toJSON()))

}

seed()
```
