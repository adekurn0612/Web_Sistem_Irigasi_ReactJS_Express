import { call, put } from "redux-saga/effects";
import apiMethod from "../../api/apiMethod";
import { resdelete } from "../action/actionReducer";

function* handledelete() {
    try {
      const result = yield call(apiMethod.deleteData);
      yield put(resdelete(result.data))
    } catch (error) {
      yield put(resdelete({message : error, status :400}))
    }
  }
  


  export {handledelete};