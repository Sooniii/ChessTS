import { Request, Response } from 'express';
import { addNewFriend, deleteFriendRelation, getAllFriendRelation } from './service';

export async function getAllFriend(req: Request, res: Response){
  try{
    const friends = await getAllFriendRelation(req.params.username);
    res.json({friendList: friends})
  }catch(err){
    res.status(400).json({error: err})
  }
}

export async function deleteFriend(req:Request, res:Response) {
  await deleteFriendRelation(req.params.username, req.body.friend)
  return res.status(200)
}

export async function insertFriend(req:Request, res:Response) {
  await addNewFriend(req.params.username, req.body.friend)
  return res.status(200)
}
