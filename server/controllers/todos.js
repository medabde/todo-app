import mongoose  from 'mongoose';

import {getTodosRepo,getTodoRepo,createTodoRepo, updateTodoRepo,deleteTodoRepo} from '../repositories/todos.js';

export const getTodos = async (req,res)=>{
    
    try {
        res.status(200).json(await getTodosRepo(req.params.listId,req.userId));
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const getTodo = async (req,res)=>{
    const {listId,id:_id} = req.params;
    
    try {
        const todo = await getTodoRepo(req.userId,listId,_id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};


export const createTodo = async (req,res)=>{
    const todo = req.body;
    
    try {

        const newTodo = await createTodoRepo(todo,req.params.listId,req.userId);

        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};


export const updateTodo = async (req,res)=>{
    const {id: _id,listId} = req.params;
    const todo = req.body;

    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Todo with that id");
    if(!mongoose.Types.ObjectId.isValid(listId)) return res.status(404).send("No List with that id");
    
    try {

        const updatedTodo = await updateTodoRepo(todo,_id,req.userId,listId);
        res.json(updatedTodo);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const deleteTodo = async (req,res)=>{
    const {id: _id,listId} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Todo with that id");
    if(!mongoose.Types.ObjectId.isValid(listId)) return res.status(404).send("No List with that id");

    try {

        // await List.findByIdAndRemove(_id);
        const message = await deleteTodoRepo(_id,req.userId,listId);
        res.json(message);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};