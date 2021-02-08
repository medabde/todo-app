import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const auth = async(req,res,next) =>{
    try {
        let token;
        if(req.headers.authorization)
        token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if(token){
            decodedData = jwt.verify(token,process.env.SECRET_JWT_KEY);
            
            req.userId = decodedData?.id;
            
            next();
        }else{
            return res.status(400).send({message:"You are not logged in"});
        }
    } catch (error) {
        return res.status(400).send(error);
    }
}

export default auth;