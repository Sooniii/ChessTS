import { config } from 'dotenv'
import { initMongoDb } from './demo-express-modules/db'
import { initServer } from './demo-express-modules/server'
config()
// import axios from 'axios'

console.log('Welcome on DEMO')

initMongoDb()
  .then(() => {
    initServer()
  })
  .catch(err => {
    if (err instanceof Error) {
      console.error('Cannot connect to MongoDB')
      process.exit(1)
    }
  })



// // test user register after one second. This must answer a 400 Bad Request
// setTimeout(async () => {
//   const { data, status } = await axios.post(
//     'http://localhost:8080/user/register',
//     { test: 'already' },
//     { validateStatus: (status) => status < 500 }
//   )
//   console.log({ status, data })
// }, 1000)

// setTimeout(async () => {
//   const { data, status } = await axios.post(
//     'http://localhost:8080/user/register',
//     { email: 'email@test.com', username: 'test', password: 'testtest' },
//     { validateStatus: (status) => status < 500 }
//   )
//   console.log({ status, data })
// }, 1000)
