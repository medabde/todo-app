import mongoose  from 'mongoose';
import {getListsRepo,getListRepo,createListRepo,updateListRepo,deleteListRepo} from '../repositories/lists.js';

export const getLists = async (req,res)=>{
    try {
        const lists = await getListsRepo(req.userId);

        res.status(200).json(lists);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const getList = async (req,res)=>{
    const {id: _id} = req.params;

    try {
        const list = await getListRepo(req.userId,_id);

        res.status(200).json(list);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};


export const createList = async (req,res)=>{
    const list = req.body;

    try {
        const newList = await createListRepo(list,req.userId);

        res.status(201).json(newList);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};


export const updateList = async (req,res)=>{
    const {id: _id} = req.params;
    const list = req.body;

    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No List with that id");
    if(!getListRepo(req.userId,_id)) return res.status(400).send("You are not the owner of the list");

    try {
        const updatedList = await updateListRepo(list,_id);
        res.json(updatedList);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const deleteList = async (req,res)=>{
    const {id:_id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post with that id");
    if(!getListRepo(req.userId,_id)) return res.status(400).send("You are not the owner of the list");

    try {

        deleteListRepo(req.userId,_id);
        res.json({message:'List deleted successfully'});
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};