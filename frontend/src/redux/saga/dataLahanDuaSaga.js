import { call, put } from "redux-saga/effects";
import { resGetLahanDuaKalium, resGetLahanDuaNitrogen, resGetLahanDuaPh, resGetLahanDuakelembapan, resGetLahanDuapotasium } from "../action/actionReducer";
import apiMethod from "../../api/apiMethod";

function* handleGetDataLahanDuaKalium() {
    try {
      const result = yield call(apiMethod.dataKaliumLahanDua);
      yield put(resGetLahanDuaKalium(result.data))
    } catch (error) {
      yield put(resGetLahanDuaKalium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanDuaNitrogen() {
    try {
      const result = yield call(apiMethod.dataNitrogenLahanDua);
      yield put(resGetLahanDuaNitrogen(result.data))
    } catch (error) {
      yield put(resGetLahanDuaNitrogen({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanDuaPh() {
    try {
      const result = yield call(apiMethod.dataPhLahanDua);
      yield put(resGetLahanDuaPh(result.data))
    } catch (error) {
      yield put(resGetLahanDuaPh({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanDuaPotasium() {
    try {
      const result = yield call(apiMethod.dataPotasiumLahanDua);
      yield put(resGetLahanDuapotasium(result.data))
    } catch (error) {
      yield put(resGetLahanDuapotasium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanDuaKelembapan() {
    try {
      const result = yield call(apiMethod.dataKelembapanLahanDua);
      yield put(resGetLahanDuakelembapan(result.data))
    } catch (error) {
      yield put(resGetLahanDuakelembapan({message : error, status :400}))
    }
  }


  export {handleGetDataLahanDuaKalium,
    handleGetDataLahanDuaNitrogen,
    handleGetDataLahanDuaPh,
    handleGetDataLahanDuaPotasium,
    handleGetDataLahanDuaKelembapan
  };