import {Sequelize} from "sequelize";
import mysql2 from 'mysql2';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mysql',
  }
);


import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _coba from  "./coba.js";
import _user from  "./user.js";

function initModels(sequelize) {
  const coba = _coba.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);


  return {
    coba,
    user,
  };
}

const models = initModels(sequelize)
export default models;
export  {sequelize};

