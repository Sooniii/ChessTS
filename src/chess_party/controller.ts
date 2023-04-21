import { Request, Response } from 'express';
import { createParty, findAllParty, findOnePartyByUser, modifyCachPrize } from './service'

export async function getAllParty(req: Request, res: Response) {
  try {
  const partyList = await findAllParty()
  res.status(200).json({listParty: partyList})
  }catch(err){
    res.status(201)
  }
}

export async function getOneParty(req: Request, res: Response){
  try{
    const party = await findOnePartyByUser(req.params.username);
    res.status(200).json({party: party})
  }catch(err){
    res.status(201)
  }
}

export async function addNewParty(req: Request, res: Response) {
  try{
    await createParty(req.body.player1)
    res.status(200)
  }catch(err){
    res.status(201)
  } 
}

export async function changeCashprize(req: Request, res: Response) {
  try{
    await modifyCachPrize(req.params.username, req.body.cashprize)
    res.status(200)
  }catch(err){
    res.status(201)
  }
}
