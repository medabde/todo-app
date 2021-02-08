import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    todo: String,
    isDone: Boolean,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const Todo = mongoose.model('Todo',todoSchema);

export default Todo;