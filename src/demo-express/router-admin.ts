import { Router } from 'express';

export const routerAdmin = Router()

// all urls start with /admin because of server.ts app.use('/admin', routerAdmin)

// GET http://localhost:8080/admin/hello
routerAdmin.get('/hello', (req, res) => {
  // req.query = url parameters like: /admin/hello?mytest=world
  // req.query = { mytest: 'world' }
  const { query, params, body } = req;

  res.json({ hello: 'World' })
})

// POST http://localhost:8080/admin/hello    data = { test: 42 }
routerAdmin.post('/hello', (req, res) => {
  const { query, params, body } = req;
  // body = { test: 42 }

  res.json({ hello: 'World', body })
})

// GET http://localhost:8080/admin/user/something
routerAdmin.get('/user/:id', (req, res) => {
  // req.params = { id: 'something' }

  res.json({ userId: req.params.id })
})
