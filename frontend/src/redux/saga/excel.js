import { call, put } from "redux-saga/effects";
import apiMethod from "../../api/apiMethod";
import { resExcel, resdelete } from "../action/actionReducer";

function* handleexcel(action) {
    try {
      const result = yield call(apiMethod.downloadExcel,action.payload);
      yield put(resExcel(result.data))
    } catch (error) {
      yield put(resExcel({message : error, status :400}))
    }
  }
  


  export {handleexcel};