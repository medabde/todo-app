import List from '../models/list.js';

import {deleteTodoRepo} from './todos.js';

export const getListsRepo = async (userId)=>{
    try {
        return await List.find({creator:userId});
    } catch (error) {
        console.error(error);
    }
};

export const getListRepo = async (userId,_id)=>{
    try {
        return await List.findOne({creator:userId,_id});
    } catch (error) {
        console.error(error);
    }
    
};

export const createListRepo = async (list,userId)=>{

    try {
        const newList = new List({ ...list, creator: userId, createdAt: new Date().toISOString() });
        newList.save();    
        return newList;
    } catch (error) {
        console.error(error);
    }
    
};


export const updateListRepo = async (list,_id)=>{
    try {
        const updatedList = await List.findByIdAndUpdate(_id, {...list,_id},{new:true});
        
        return updatedList;
    } catch (error) {
        console.error(error);
    }
};

export const removeFromTodosListRepo = async(listId,toBeDeleted)=>{
    try {
        const updatedList = await List.findByIdAndUpdate(listId, { $pull: { "todos": toBeDeleted } }, { safe: true, upsert: true });
        return updatedList;
    } catch (error) {
        console.error(error);
    }
}


export const deleteListRepo = async (userId,_id) => {
    try {
        const list = await getListRepo(userId,_id);
        for (let index = 0; index < list.todos.length; index++) {
            await deleteTodoRepo(list.todos[0],userId,_id);   
        }
        await List.findByIdAndRemove(_id);
        
    } catch (error) {
        console.error(error);
    }
};