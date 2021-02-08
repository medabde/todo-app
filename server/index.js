import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import listRoutes from './routes/lists.js';
import todoRoutes from './routes/todos.js';
import auth from './middleware/auth.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user',userRoutes);
app.use('/api/lists',auth,listRoutes);
app.use('/api/todos',auth,todoRoutes);

dotenv.config();

const CONNECTION_URL= process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=> console.log(`Server running on ${PORT}`)))
    .catch((error)=>console.error(error));
mongoose.set('useFindAndModify',false);