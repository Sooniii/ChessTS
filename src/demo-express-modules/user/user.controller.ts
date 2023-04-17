import { Request, Response } from 'express';

export function getMe(req: Request, res: Response) {

  res.json({ hello: 'World' })
}

export function postRegister(req: Request, res: Response) {
  const { body } = req;

  res.json({ hello: 'World', body })
}

export function postLogin(req: Request, res: Response) {
  const { body } = req;

  res.json({ hello: 'World', body })
}
