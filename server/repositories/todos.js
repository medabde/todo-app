import Todo from '../models/todo.js';
import {getListRepo,updateListRepo,removeFromTodosListRepo} from '../repositories/lists.js';

export const getTodosRepo = async (listId,userId)=>{
    try {
        
        const list = await getListRepo(userId,listId);
        let todos = [];
        for (let index = 0; index < list.todos.length; index++) {
            const todo = list.todos[index];
            todos.push(await Todo.findOne({_id:todo}));
        }
        return todos;
    } catch (error) {
        console.error(error);
    }
};

export const getTodoRepo = async (userId,listId,_id)=>{
    try {
        const list = await getListRepo(userId,listId);
        for (let index = 0; index < list.todos.length; index++) {
            if(list.todos[index]===_id) return await Todo.findOne({_id});
        }
    } catch (error) {
        console.error(error);
    }
    
};

export const createTodoRepo = async (todo,listId,userId)=>{
    try {
        const list = await getListRepo(userId,listId);
        if(list){
            const newTodo = new Todo({ ...todo, createdAt: new Date().toISOString() });
            newTodo.save();
            const todos = list.todos;
            todos.push(newTodo._id);
            await updateListRepo({...list,todos},listId);
            return newTodo;
        }
        
    } catch (error) {
        console.error(error);
    }
    
};


export const updateTodoRepo = async (todo,_id,userId,listId)=>{
    try {
        if(!getListRepo(userId,listId)) return {message:"you are not the owner of this list"};
        const updatedTodo = await Todo.findByIdAndUpdate(_id, {...todo,_id},{new:true});
        
        return updatedTodo;
    } catch (error) {
        console.error(error);
    }
};


export const deleteTodoRepo = async (_id,userId,listId) => {
    try {
        const list = await getListRepo(userId,listId);
        if(!list) return {message:"you are not the owner of this list"};
        
        await removeFromTodosListRepo(listId,_id);
        await Todo.findByIdAndRemove(_id);
        

        return {message:"Todo deleted successfully"};

    } catch (error) {
        console.error(error);
    }
};