import { call, put } from "redux-saga/effects";
import { resGetAll} from "../action/actionReducer";
import apiMethod from "../../api/apiMethod";

function* handleGetAllData() {
  try {
    const result = yield call(apiMethod.getallData);
    yield put(resGetAll(result.data));
  } catch (error) {
    yield put(resGetAll({ message: error, status: 400 }));
  }
}




export {handleGetAllData,
};
