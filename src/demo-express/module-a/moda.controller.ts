import { Request, Response } from 'express';

export function getHello(req: Request, res: Response) {
  res.json({ hello: 'World' })
}

export function postHello(req: Request, res: Response) {
  const { body } = req;

  res.json({ hello: 'World', body })
}

export function getUserById(req: Request<{ user_id: string }>, res: Response) {
  res.json({ id: req.params.user_id })
}
