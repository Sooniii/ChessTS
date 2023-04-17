import { initServer } from './demo-express-modules/server'
// import axios from 'axios'

console.log('Welcome on DEMO')

initServer()


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
