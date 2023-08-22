import { createLogger } from "redux-logger";
import createSagaMiddleware from '@redux-saga/core'
import { combineReducers } from 'redux';
import DataReduce from '../reducer/dataReducer';
import { configureStore } from '@reduxjs/toolkit';
import watchAll from "../saga/index";
import PotasiumReduce from "../reducer/potasiumReducer";
import NitrogenReduce from "../reducer/nitrogenReducer";
import KelembapanReduce from "../reducer/kelembapanReducer";
import PHReduce from "../reducer/phReducer";
import KaliumReduce from "../reducer/kaliumReducer";
import LoginReduce from "../reducer/loginReducer";
import DataBaruLahanSatuReduce from "../reducer/dataBaruLahanSatuReducer";
import DataBaruLahanDuaReduce from "../reducer/dataBaruLahanDua";
import DataBaruLahanEmpatReduce from "../reducer/dataBaruLahanEmpat";
import DataBaruLahanTigaReduce from "../reducer/dataBaruLahanTIga";
import DeleteReduce from "../reducer/delete";
import ExcelReduce from "../reducer/excel";

const logger = createLogger();
const saga = createSagaMiddleware();

const reducer = combineReducers({
  dataReducer:  DataReduce,
  potasiumReducer:PotasiumReduce,
  nitrogenReducer: NitrogenReduce,
  kelembapanReducer: KelembapanReduce,
  phReducer: PHReduce,
  kaliumReducer:KaliumReduce,
  loginReducer:LoginReduce,
  dataBaruLahanSatuReducer : DataBaruLahanSatuReduce,
  dataBaruLahanDuaReducer : DataBaruLahanDuaReduce,
  dataBaruLahanTigaReducer : DataBaruLahanTigaReduce,
  dataBaruLahanEmpatReducer : DataBaruLahanEmpatReduce,
  deleteReducer : DeleteReduce,
  excelReducer : ExcelReduce
});

const Store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger).concat(saga),
});

saga.run(watchAll);


export default Store;
