import { call, put } from "redux-saga/effects";
import { resDataBaruLahanDua, resDataBaruLahanEmpat, resDataBaruLahanSatu, resDataBaruLahanTiga, resGetLahanDuaKalium, resGetLahanDuaNitrogen, resGetLahanDuaPh, resGetLahanDuakelembapan, resGetLahanDuapotasium } from "../action/actionReducer";
import apiMethod from "../../api/apiMethod";

function* handleGetDatabaruLahanSatu() {
    try {
      const result = yield call(apiMethod.databaruLahanSatu);
      yield put(resDataBaruLahanSatu(result.data))
    } catch (error) {
      yield put(resDataBaruLahanSatu({message : error, status :400}))
    }
  }
  function* handleGetDatabaruLahanDua() {
    try {
      const result = yield call(apiMethod.databaruLahanDua);
      yield put(resDataBaruLahanDua(result.data))
    } catch (error) {
      yield put(resDataBaruLahanDua({message : error, status :400}))
    }
  }

  function* handleGetDatabaruLahanTiga() {
    try {
      const result = yield call(apiMethod.databaruLahanTiga);
      yield put(resDataBaruLahanTiga(result.data))
    } catch (error) {
      yield put(resDataBaruLahanTiga({message : error, status :400}))
    }
  }

  function* handleGetDatabaruLahanEmpat() {
    try {
      const result = yield call(apiMethod.databaruLahanEmpat);
      yield put(resDataBaruLahanEmpat(result.data))
    } catch (error) {
      yield put(resDataBaruLahanEmpat({message : error, status :400}))
    }
  }

export  {
  handleGetDatabaruLahanSatu,
  handleGetDatabaruLahanDua,
  handleGetDatabaruLahanTiga,
  handleGetDatabaruLahanEmpat
}
