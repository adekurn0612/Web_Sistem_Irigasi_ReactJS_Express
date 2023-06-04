import apiMethod from "../../api/apiMethod";
import { resLogin } from "../action/actionReducer";

function* handleLogin() {
    try {
      const result = yield call(apiMethod.login);
      yield put(resLogin(result.data))
    } catch (error) {
      yield put(resLogin({message : error, status :400}))
    }
  }

export default {
    handleLogin
}