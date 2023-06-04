import { call, put } from "redux-saga/effects";
import { resGetLahanTigaKalium, resGetLahanTigaNitrogen, resGetLahanTigaPh, resGetLahanTigakelembapan, resGetLahanTigapotasium } from "../action/actionReducer";
import apiMethod from "../../api/apiMethod";

function* handleGetDataLahanTigaKalium() {
    try {
      const result = yield call(apiMethod.dataKaliumLahanTiga);
      yield put(resGetLahanTigaKalium(result.data))
    } catch (error) {
      yield put(resGetLahanTigaKalium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanTigaNitrogen() {
    try {
      const result = yield call(apiMethod.dataNitrogenLahanTiga);
      yield put(resGetLahanTigaNitrogen(result.data))
    } catch (error) {
      yield put(resGetLahanTigaNitrogen({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanTigaPh() {
    try {
      const result = yield call(apiMethod.dataPhLahanTiga);
      yield put(resGetLahanTigaPh(result.data))
    } catch (error) {
      yield put(resGetLahanTigaPh({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanTigaPotasium() {
    try {
      const result = yield call(apiMethod.dataPotasiumLahanTiga);
      yield put(resGetLahanTigapotasium(result.data))
    } catch (error) {
      yield put(resGetLahanTigapotasium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanTigaKelembapan() {
    try {
      const result = yield call(apiMethod.dataKelembapanLahanTiga);
      yield put(resGetLahanTigakelembapan(result.data))
    } catch (error) {
      yield put(resGetLahanTigakelembapan({message : error, status :400}))
    }
  }


  export {handleGetDataLahanTigaKalium,
    handleGetDataLahanTigaNitrogen,
    handleGetDataLahanTigaPh,
    handleGetDataLahanTigaPotasium,
    handleGetDataLahanTigaKelembapan
  };