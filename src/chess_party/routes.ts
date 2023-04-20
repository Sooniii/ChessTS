import { Router } from 'express';
import { getAllParty } from './controller';

export const router = Router();

router.get('/all', getAllParty);
