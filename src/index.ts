
function loadDb() {
  return import('./demo-express-modules/db').then(({ initMongoDb }) => initMongoDb)
}

function loadWebserver() {
  return import('./demo-express-modules/server').then(({ initServer }) => initServer)
}

import('dotenv/config').then(() => {
  loadDb()
  .then(() => {
    loadWebserver()
  })
  .catch(err => {
    if (err instanceof Error) {
      console.error('Cannot connect to MongoDB')
      process.exit(1)
    }
  })
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
