import { Router } from 'express';
import { registerNewUser, getLoginUser, modifyPasswordOfUser, findAllUser } from './controller'

export const router = Router();


router.post('/register', registerNewUser)
router.post('/login', getLoginUser)
router.put('/modify/:email', modifyPasswordOfUser)
router.get('/all', findAllUser)
