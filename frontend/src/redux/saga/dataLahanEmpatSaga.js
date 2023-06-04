import { call, put } from "redux-saga/effects";
import { resGetLahanEmpatKalium, resGetLahanEmpatNitrogen, resGetLahanEmpatPh, resGetLahanEmpatkelembapan, resGetLahanEmpatpotasium } from "../action/actionReducer";
import apiMethod from "../../api/apiMethod";

function* handleGetDataLahanEmpatKalium() {
    try {
      const result = yield call(apiMethod.dataKaliumLahanEmpat);
      yield put(resGetLahanEmpatKalium(result.data))
    } catch (error) {
      yield put(resGetLahanEmpatKalium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanEmpatNitrogen() {
    try {
      const result = yield call(apiMethod.dataNitrogenLahanEmpat);
      yield put(resGetLahanEmpatNitrogen(result.data))
    } catch (error) {
      yield put(resGetLahanEmpatNitrogen({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanEmpatPh() {
    try {
      const result = yield call(apiMethod.dataPhLahanEmpat);
      yield put(resGetLahanEmpatPh(result.data))
    } catch (error) {
      yield put(resGetLahanEmpatPh({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanEmpatPotasium() {
    try {
      const result = yield call(apiMethod.dataPotasiumLahanEmpat);
      yield put(resGetLahanEmpatpotasium(result.data))
    } catch (error) {
      yield put(resGetLahanEmpatpotasium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanEmpatKelembapan() {
    try {
      const result = yield call(apiMethod.dataKelembapanLahanEmpat);
      yield put(resGetLahanEmpatkelembapan(result.data))
    } catch (error) {
      yield put(resGetLahanEmpatkelembapan({message : error, status :400}))
    }
  }


  export {handleGetDataLahanEmpatKalium,
    handleGetDataLahanEmpatNitrogen,
    handleGetDataLahanEmpatPh,
    handleGetDataLahanEmpatPotasium,
    handleGetDataLahanEmpatKelembapan
  };