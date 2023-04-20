import { Router } from 'express';
import { registerNewUser, getLoginUser, modifyPasswordOfUser } from './controller'

export const router = Router();


router.post('/register', registerNewUser)
router.post('/login', getLoginUser)
router.put('/modify/:email', modifyPasswordOfUser)
