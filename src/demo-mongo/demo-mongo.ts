import { mongo } from './mongo';

interface User {
  email: string
  username: string
  age: number
}

async function doStuffWithMongo() {
  // a ne faire qu'une fois d'habitude
  const UserCollection = mongo.db!.collection<User>('users')

  // trouve tous les users avec un age >= 18
  const allUsersData = await UserCollection.find({ age: { $gte: 18 } })

  // trouve un utilisateur avec une adresse email
  const oneUser = await UserCollection.findOne({ email: 'test@test.com' })

  // ajoute un user
  const user = {
    email: 'test@test2.com',
    username: 'le po',
    age: 256
  }
  const added = await UserCollection.insertOne(user)

  // met a jour un utilisateur
  const newEmail = 'test2@test.com'
  const updated = await UserCollection.updateOne({ email: user.email }, { $set: { email: newEmail }})
}


mongo.initMongoDb()
  .then(() => {
    doStuffWithMongo()
  })
