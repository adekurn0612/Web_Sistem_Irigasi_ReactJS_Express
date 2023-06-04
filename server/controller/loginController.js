import models, { Sequelize } from "sequelize";
import { sequelize } from "../models/init-models.js";
import user from "../models/user.js";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";


const createUser = async(req, res)=>{
    try {  
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(req.body.password,salt);
        const result = await user.create({
        username : req.body.username,
        password: passHash,
        });

        res.send(result);
        }catch(e){
        res.send(e.message);
     
}
}
    
const login = async (req, res) => {
    try {
        const foundUser = await user.findOne({
            where: { username: req.body.username }
        });

        if (foundUser === null) {
            throw new Error('Invalid username');
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, foundUser.password);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ username: foundUser.username }, process.env.SECRET_KEY, { expiresIn: '23h' });

        res.send({ message: `Welcome ${foundUser.username}`, token: token });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};




export default{
    login,
    createUser
}