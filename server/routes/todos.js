import express from 'express';

import {getTodos,getTodo,createTodo,updateTodo,deleteTodo} from '../controllers/todos.js';


const router = express.Router();

router.get('/:listId/',getTodos);
router.get('/:listId/:id',getTodo);
router.post('/:listId/',createTodo);
router.patch('/:listId/:id',updateTodo);
router.delete('/:listId/:id',deleteTodo);

export default router;