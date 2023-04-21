import { Router } from 'express';
import { addNewParty, getAllParty, getOneParty } from './controller';

export const router = Router();

router.get('/all', getAllParty);
router.get('/find/:username', getOneParty);
router.post('/add', addNewParty);

