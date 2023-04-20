import { Router } from 'express';
import { deleteFriend, getAllFriend, insertFriend } from './controller';

export const router = Router();

router.get('/all/:username', getAllFriend)
router.delete('/delete/:username', deleteFriend)
router.post('/add/:username', insertFriend)
