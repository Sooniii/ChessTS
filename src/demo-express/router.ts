import { Router } from 'express';

export const routerOne = Router()

// GET http://localhost:8080/hello
routerOne.get('/hello', (req, res) => {
  // req.query = url parameters like: /hello?mytest=world
  // req.query = { mytest: 'world' }
  const { query, params, body } = req;

  res.json({ hello: 'World' })
})

// POST http://localhost:8080/hello    data = { test: 42 }
routerOne.post('/hello', (req, res) => {
  const { query, params, body } = req;
  // body = { test: 42 }

  res.json({ hello: 'World', body })
})

// GET http://localhost:8080/user/something
routerOne.get('/user/:id', (req, res) => {
  // req.params = { id: 'something' }

  res.json({ userId: req.params.id })
})
