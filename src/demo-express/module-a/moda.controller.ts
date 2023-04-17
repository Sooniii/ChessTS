import { Request, Response } from 'express';

export function getHello(req: Request, res: Response) {
  // req.query = url parameters like: /hello?mytest=world
  // req.query = { mytest: 'world' }
  const { query, params, body } = req;
  res.json({ hello: 'World' })
}

export function postHello(req: Request, res: Response) {
  const { query, params, body } = req;
  // body = { test: 42 }

  res.json({ hello: 'World', body })
}

export function getUserById(req: Request<{ user_id: string }>, res: Response) {
  // req.params = { user_id: 'something' }

  res.json({ userId: req.params.user_id })
}
