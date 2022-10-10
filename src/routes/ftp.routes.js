import { Router } from 'express';
import { getFTP } from '../controller/ftp.controller.js';

const router = Router();

router.post('/uploadJson', getFTP);

export default router;