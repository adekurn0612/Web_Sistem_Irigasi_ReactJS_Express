import models, {sequelize} from "../models/init-models.js";

const getlAll = async (req, res)=>{
    try{
    const result = await models.coba.findAll();
    res.json(result);
    }catch(e){
        res.json(e.message)}
}

export default {getlAll};