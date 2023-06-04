import { call, put } from "redux-saga/effects";
import { resGetLahanSatuKalium, resGetLahanSatuNitrogen, resGetLahanSatuPh, resGetLahanSatukelembapan, resGetLahanSatupotasium } from "../action/actionReducer";
import apiMethod from "../../api/apiMethod";

function* handleGetDataLahanSatuKalium() {
    try {
      const result = yield call(apiMethod.dataKaliumLahanSatu);
      yield put(resGetLahanSatuKalium(result.data))
      // console.log(result.data)
    } catch (error) {
      yield put(resGetLahanSatuKalium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanSatuNitrogen() {
    try {
      const result = yield call(apiMethod.dataNitrogenLahanSatu);
      yield put(resGetLahanSatuNitrogen(result.data))
    } catch (error) {
      yield put(resGetLahanSatuNitrogen({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanSatuPh() {
    try {
      const result = yield call(apiMethod.dataPhLahanSatu);
      yield put(resGetLahanSatuPh(result.data))
    } catch (error) {
      yield put(resGetLahanSatuPh({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanSatuPotasium() {
    try {
      const result = yield call(apiMethod.dataPotasiumLahanSatu);
      yield put(resGetLahanSatupotasium(result.data))
    } catch (error) {
      yield put(resGetLahanSatupotasium({message : error, status :400}))
    }
  }
  
  function* handleGetDataLahanSatuKelembapan() {
    try {
      const result = yield call(apiMethod.dataKelembapanLahanSatu);
      yield put(resGetLahanSatukelembapan(result.data))
    } catch (error) {
      yield put(resGetLahanSatukelembapan({message : error, status :400}))
    }
  }


  export {handleGetDataLahanSatuKalium,
    handleGetDataLahanSatuNitrogen,
    handleGetDataLahanSatuPh,
    handleGetDataLahanSatuPotasium,
    handleGetDataLahanSatuKelembapan
  };