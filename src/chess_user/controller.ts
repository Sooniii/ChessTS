import { Request, Response } from 'express';
import { User, UserLoginBody } from './user';
import { getOneUserByUserName, addNewUser, modifyUserPassword, getAllUser } from './service'
import { handleClientScriptLoad } from 'next/script';


  export async function getLoginUser(req: Request, res: Response){
    const loginbody = req.body
    try{
      const user = await getOneUserByUserName(loginbody);
      res.json({user: user})
    }catch(err){
      res.status(400).json({error: err})
    }
  }

  export async function registerNewUser(req: Request, res: Response){
    try{
      await addNewUser(req.body)
      return res.status(200);
    }catch(err){
      res.status(201).json({error: err})
    }
  }

  export async function findAllUser(req: Request, res: Response) {
    try{
      const users = await getAllUser();
      res.status(200).json({users: users})
    }catch(err){
      res.status(201)
    }
  }

  export function modifyPasswordOfUser(req: Request, res: Response){
    modifyUserPassword(req.body, req.params.emailUser);
    return res.status(200)
  }
