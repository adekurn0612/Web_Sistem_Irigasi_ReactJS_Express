import models, { Sequelize } from "sequelize";
import { sequelize } from "../models/init-models.js";

const dataBaruLahanSatu = async (req, res) => {
    try {
        const query =
            `SELECT * FROM coba where nama = "Lora 0"
            ORDER BY timestamp DESC 
            LIMIT 1;`;

        const result = await sequelize.query(query);

        res.json(result);
    } catch (e) {
        res.json(e.message);
    }
}

const dataBaruLahanDua = async (req, res) => {
    try {
        const query =
            `SELECT * FROM coba where nama = "Lora 1"
            ORDER BY timestamp DESC 
            LIMIT 1;`;

        const result = await sequelize.query(query);

        res.json(result);
    } catch (e) {
        res.json(e.message);
    }
}

const dataBaruLahanTiga = async (req, res) => {
    try {
        const query =
            `SELECT * FROM coba where nama = "Lora 2"
            ORDER BY timestamp DESC 
            LIMIT 1;`;

        const result = await sequelize.query(query);

        res.json(result);
    } catch (e) {
        res.json(e.message);
    }
}

const dataBaruLahanEmpat = async (req, res) => {
    try {
        const query =
            `SELECT * FROM coba where nama = "Lora 3"
            ORDER BY timestamp DESC 
            LIMIT 1;`;

        const result = await sequelize.query(query);

        res.json(result);
    } catch (e) {
        res.json(e.message);
    }
}

export default {
    dataBaruLahanSatu,
    dataBaruLahanDua,
    dataBaruLahanTiga,
    dataBaruLahanEmpat
}