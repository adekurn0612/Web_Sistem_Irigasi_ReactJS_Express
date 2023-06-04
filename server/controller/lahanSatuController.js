import models, { Sequelize } from "sequelize";
import { sequelize } from "../models/init-models.js";


//avg 7 hari
const dataKalium = async (req, res) => {
    try {
        const query =
            `SELECT DATE(timestamp) AS date, AVG(sensor_k) AS avg_sensor_k_perHari
            FROM coba
            WHERE timestamp >= DATE_SUB((SELECT MAX(timestamp) FROM coba), INTERVAL 7 DAY) AND nama = 'Lora 0'
            GROUP BY DATE(timestamp) 
            ORDER BY date DESC;`;

        const result = await sequelize.query(query);
        const formattedResult = {
            avg_sensor_k_perHari: result[0].map(entry => entry.avg_sensor_k_perHari),
            date: result[0].map(entry => entry.date)
        };

        res.json(formattedResult);
    } catch (e) {
        res.json(e.message);
    }
}

//terbaru
const dataKaliumTerbaru = async (req, res) => {
    try {
        const query =
            `SELECT sensor_k FROM coba where nama = "Lora 0"
            ORDER BY timestamp DESC 
            LIMIT 1;`;

        const result = await sequelize.query(query);

        res.json(result[0][0]);
    } catch (e) {
        res.json(e.message);
    }
}




//avg 7 hari
const dataNitrogen = async (req , res)=>{
    try{
        const query = 
        `SELECT DATE(timestamp) AS date, AVG(sensor_n) AS avg_sensor_n_perHari
        FROM coba
        WHERE timestamp >= DATE_SUB((SELECT MAX(timestamp) FROM coba), INTERVAL 7 DAY) AND nama = 'Lora 0'
        GROUP BY DATE(timestamp) 
        ORDER BY date DESC;
        `;
        const result = await sequelize.query(query);
        const formattedResult = {
            avg_sensor_n_perHari: result[0].map(entry => entry.avg_sensor_n_perHari),
            date: result[0].map(entry => entry.date)
        };

        res.json(formattedResult);
    }catch(e){
        res.json(e.message)
    }
}

//terbaru
const dataNitrogenTerbaru = async (req , res)=>{
    try{
        const query = 
        `SELECT sensor_n FROM coba where nama = "Lora 0"
        ORDER BY timestamp DESC 
        LIMIT 1;
        `;
        const result = await sequelize.query(query);
        res.json(result[0][0]);
    }catch(e){
        res.json(e.message)
    }
}

//avg ph 7 hari

const dataPH = async (req , res)=>{
    try{
    const query = 
        `SELECT DATE(timestamp) AS date, AVG(sensor_ph) AS avg_sensor_ph_perHari
        FROM coba
        WHERE timestamp >= DATE_SUB((SELECT MAX(timestamp) FROM coba), INTERVAL 7 DAY) AND nama = 'Lora 0'
        GROUP BY DATE(timestamp) 
        ORDER BY date DESC;
        `;
    const result = await sequelize.query(query);
    const formattedResult = {
        avg_sensor_ph_perHari: result[0].map(entry => entry.avg_sensor_ph_perHari),
        date: result[0].map(entry => entry.date)
    };

    res.json(formattedResult);
    }catch(e){
        res.json(e.message)
    }
}

//terbaru
const dataPHTerbaru = async (req , res)=>{
    try{
    const query = 
        `SELECT sensor_ph FROM coba where nama = "Lora 0"
        ORDER BY timestamp DESC 
        LIMIT 1;
        `;
    const result = await sequelize.query(query);

    res.json(result[0][0]);
    }catch(e){
        res.json(e.message)
    }
}

//avg 7 hari
const dataPotasium = async (req, res)=>{
    try{
        const query = 
        `SELECT DATE(timestamp) AS date, AVG(sensor_p) AS avg_sensor_p_perHari
        FROM coba
        WHERE timestamp >= DATE_SUB((SELECT MAX(timestamp) FROM coba), INTERVAL 7 DAY) AND nama = 'Lora 0'
        GROUP BY DATE(timestamp) 
        ORDER BY date DESC;
        `;
        const result = await sequelize.query(query);
        const formattedResult = {
            avg_sensor_p_perHari: result[0].map(entry => entry.avg_sensor_p_perHari),
            date: result[0].map(entry => entry.date)
        };

        res.json(formattedResult);
    }catch(e){
        res.json(e.message);
    }
}

//terbaru

const dataPotasiumTerbaru = async (req, res)=>{
    try{
        const query = 
        `SELECT sensor_p FROM coba where nama = "Lora 0"
        ORDER BY timestamp DESC 
        LIMIT 1;
        `;
        const result = await sequelize.query(query);

        res.json(result[0][0]);
    }catch(e){
        res.json(e.message);
    }
}

//avg 7 hari
const dataKelembapan = async (req, res) => {
    try{
        const query = 
        `SELECT DATE(timestamp) AS date, AVG(sensor_kelembaban) AS avg_sensor_kelembaban_perHari
        FROM coba
        WHERE timestamp >= DATE_SUB((SELECT MAX(timestamp) FROM coba), INTERVAL 7 DAY) AND nama = 'Lora 0'
        GROUP BY DATE(timestamp) 
        ORDER BY date DESC;
        `;
        const result = await sequelize.query(query);
        const formattedResult = {
            avg_sensor_kel_perHari: result[0].map(entry => entry.avg_sensor_kelembaban_perHari),
            date: result[0].map(entry => entry.date)
        };

        res.json(formattedResult);
    }catch(e){
        res.json(e.message);
    }
}

// terbaru
const dataKelembapanTerbaru = async (req, res) => {
    try{
        const query = 
        `SELECT sensor_kelembaban FROM coba where nama = "Lora 0"
        ORDER BY timestamp DESC 
        LIMIT 1;
        `;
        const result = await sequelize.query(query);
        res.json(result[0][0]);
    }catch(e){
        res.json(e.message);
    }
}

export default {
    dataKalium,
    dataKaliumTerbaru,
    dataNitrogen,
    dataNitrogenTerbaru,
    dataPH,
    dataPHTerbaru,
    dataPotasium,
    dataPotasiumTerbaru,
    dataKelembapan,
    dataKelembapanTerbaru

}