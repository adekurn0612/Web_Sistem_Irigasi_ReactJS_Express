import ActionType from "../action/actionType";

const initialState ={
    baru_empat: [],
    message : '',
    status : '',
    refresh: '',
}


export default function DataBaruLahanEmpatReduce(state = initialState, action) {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
      case ActionType.DATA_BARU_LAHAN_EMPAT_RESPONSE:
        return { ...state, baru_empat: payload, refresh: true, message: state.message, status: state.status };
      default:
        return state;
    }
  }
