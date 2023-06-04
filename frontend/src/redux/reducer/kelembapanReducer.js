import ActionType from "../action/actionType";

const initialState ={
    kelembapan: [],
    message : '',
    status : '',
    refresh: '',
}


export default function KelembapanReduce(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        //LAHAN SATU
        case ActionType.LAHAN_SATU_KELEMBAPAN_RESPONSE:
        return { ...state, kelembapan: payload, refresh: true, message: state.message, status: state.status };
        //LAHAN2
        case ActionType.LAHAN_DUA_KELEMBAPAN_RESPONSE:
        return { ...state, kelembapan: payload, refresh: true, message: state.message, status: state.status };
        //LAHAN TIGA
        case ActionType.LAHAN_TIGA_KELEMBAPAN_RESPONSE:
        return { ...state, kelembapan: payload, refresh: true, message: state.message, status: state.status };
        //LAHAN EMPAT
        case ActionType.LAHAN_EMPAT_KELEMBAPAN_RESPONSE:
        return { ...state, kelembapan: payload, refresh: true, message: state.message, status: state.status };
      default:
        return state;
    }
  }
