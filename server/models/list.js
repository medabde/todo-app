import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
    title: String,
    name: String,
    creator: String,
    todos: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const List = mongoose.model('List',listSchema);

export default List;