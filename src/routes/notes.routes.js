import {Router} from 'express';
import { createNote, deleteNote, getNotes, updateNote } from '../controller/notes.controllers.js';

const router = Router();

router.get('/notes', getNotes);
router.post('/note', createNote);
router.put('/note/:id', updateNote);
router.delete('/note/:id', deleteNote);

export default router;