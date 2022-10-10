import { Router } from 'express';
import { getCases, createCase, updateCase, getCasesNotes } from '../controller/cases.controller.js';

const router = Router();

router.get('/cases', getCases);
router.post('/case', createCase);
router.put('/case/:id', updateCase);
router.get('/casesNotes', getCasesNotes);

export default router;