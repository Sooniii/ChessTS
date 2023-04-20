import { Request, Response } from 'express';
import { findAllParty } from './service'

export async function getAllParty(req: Request, res: Response) {
  try {
  const partyList = await findAllParty()
  res.status(200).json({listParty: partyList})
  }catch(err){
    res.status(201)
  }
}
