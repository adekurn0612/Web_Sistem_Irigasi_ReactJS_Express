import ActionType from "../action/actionType";

const initialState ={
    baru_satu: [],
    message : '',
    status : '',
    refresh: '',
}


export default function DataBaruLahanSatuReduce(state = initialState, action) {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
      case ActionType.DATA_BARU_LAHAN_SATU_RESPONSE:
        return { ...state, baru_satu: payload, refresh: true, message: state.message, status: state.status };
      default:
        return state;
    }
  }
