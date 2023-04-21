import { Request, Response } from 'express';
import { createParty, findAllParty, findOnePartyByUser, modifyCachPrize, updateBoard } from './service'

export async function getAllParty(req: Request, res: Response) {
  try {
  const partyList = await findAllParty()
  res.status(200).json({listParty: partyList})
  }catch(err){
    res.status(201)
  }
}

export async function getOneParty(username: string){
  try{
    const party = await findOnePartyByUser(username);
    return party
  }catch(err){
    return
  }
}

export async function addNewParty(req: Request, res: Response) {
  try{
    await createParty(req.body.player1, req.body.board)
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

export async function changeBoard(username: string, board: any) {
  try{
    await updateBoard(username, board)
  }catch(err){
  }
}
