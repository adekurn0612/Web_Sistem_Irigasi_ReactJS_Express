import ActionType from "../action/actionType";

const initialState ={
    kalium: [],
    message : '',
    status : '',
    refresh: '',
}


export default function KaliumReduce(state = initialState, action) {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {

        //LAHAN SATU
        case ActionType.LAHAN_SATU_KALIUM_RESPONSE:
        return { ...state, kalium: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN2
        case ActionType.LAHAN_DUA_KALIUM_RESPONSE:
        return { ...state, kalium: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN TIGA
        case ActionType.LAHAN_TIGA_KALIUM_RESPONSE:
        return { ...state, kalium: payload, refresh: true, message: state.message, status: state.status };

        //LAHAN EMPAT
        case ActionType.LAHAN_EMPAT_KALIUM_RESPONSE:
        return { ...state, kalium: payload, refresh: true, message: state.message, status: state.status };

      default:
        return state;
    }
  }
