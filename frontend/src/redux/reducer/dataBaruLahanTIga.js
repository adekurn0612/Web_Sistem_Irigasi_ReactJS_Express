import ActionType from "../action/actionType";

const initialState ={
    baru_tiga: [],
    message : '',
    status : '',
    refresh: '',
}


export default function DataBaruLahanTigaReduce(state = initialState, action) {
    const { type, payload } = action;
    // console.log(payload);
    switch (type) {
      case ActionType.DATA_BARU_LAHAN_TIGA_RESPONSE:
        return { ...state, baru_tiga: payload, refresh: true, message: state.message, status: state.status };
      default:
        return state;
    }
  }
