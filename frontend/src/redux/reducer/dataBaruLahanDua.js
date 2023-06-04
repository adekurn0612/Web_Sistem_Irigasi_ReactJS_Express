import ActionType from "../action/actionType";

const initialState ={
    baru_dua: [],
    message : '',
    status : '',
    refresh: '',
}


export default function DataBaruLahanDuaReduce(state = initialState, action) {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
      case ActionType.DATA_BARU_LAHAN_DUA_RESPONSE:
        return { ...state, baru_dua: payload, refresh: true, message: state.message, status: state.status };
      default:
        return state;
    }
  }
