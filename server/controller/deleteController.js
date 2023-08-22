
import { sequelize } from "../models/init-models.js";

const deleteData = async(req , res)=>{
    try {
        const query = `delete * from coba`
        const result = sequelize.query(query)
        res.json('succes')
    } catch (error) {
        return error.message
    }
}


export default {deleteData}